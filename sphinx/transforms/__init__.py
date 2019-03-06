"""
    sphinx.transforms
    ~~~~~~~~~~~~~~~~~

    Docutils transforms used by Sphinx when reading documents.

    :copyright: Copyright 2007-2019 by the Sphinx team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

import re
from typing import cast

from docutils import nodes
from docutils.transforms import Transform, Transformer
from docutils.transforms.parts import ContentsFilter
from docutils.transforms.universal import SmartQuotes
from docutils.utils import normalize_language_tag
from docutils.utils.smartquotes import smartchars

from sphinx import addnodes
from sphinx.locale import _, __
from sphinx.util import logging
from sphinx.util.docutils import new_document
from sphinx.util.i18n import format_date
from sphinx.util.nodes import NodeMatcher, apply_source_workaround, is_smartquotable

if False:
    # For type annotation
    from typing import Any, Generator, List, Tuple  # NOQA
    from sphinx.application import Sphinx  # NOQA
    from sphinx.config import Config  # NOQA
    from sphinx.domain.std import StandardDomain  # NOQA
    from sphinx.environment import BuildEnvironment  # NOQA


logger = logging.getLogger(__name__)

default_substitutions = set([
    'version',
    'release',
    'today',
])


class SphinxTransform(Transform):
    """A base class of Transforms.

    Compared with ``docutils.transforms.Transform``, this class improves accessibility to
    Sphinx APIs.
    """

    @property
    def app(self):
        # type: () -> Sphinx
        """Reference to the :class:`.Sphinx` object."""
        return self.env.app

    @property
    def env(self):
        # type: () -> BuildEnvironment
        """Reference to the :class:`.BuildEnvironment` object."""
        return self.document.settings.env

    @property
    def config(self):
        # type: () -> Config
        """Reference to the :class:`.Config` object."""
        return self.env.config


class SphinxTransformer(Transformer):
    """
    A transformer for Sphinx.
    """

    document = None  # type: nodes.document
    env = None  # type: BuildEnvironment

    def set_environment(self, env):
        # type: (BuildEnvironment) -> None
        self.env = env

    def apply_transforms(self):
        # type: () -> None
        if isinstance(self.document, nodes.document):
            if not hasattr(self.document.settings, 'env') and self.env:
                self.document.settings.env = self.env

            super().apply_transforms()
        else:
            # wrap the target node by document node during transforming
            try:
                document = new_document('')
                if self.env:
                    document.settings.env = self.env
                document += self.document
                self.document = document
                super().apply_transforms()
            finally:
                self.document = self.document[0]


class DefaultSubstitutions(SphinxTransform):
    """
    Replace some substitutions if they aren't defined in the document.
    """
    # run before the default Substitutions
    default_priority = 210

    def apply(self, **kwargs):
        # type: (Any) -> None
        # only handle those not otherwise defined in the document
        to_handle = default_substitutions - set(self.document.substitution_defs)
        for ref in self.document.traverse(nodes.substitution_reference):
            refname = ref['refname']
            if refname in to_handle:
                text = self.config[refname]
                if refname == 'today' and not text:
                    # special handling: can also specify a strftime format
                    text = format_date(self.config.today_fmt or _('%b %d, %Y'),
                                       language=self.config.language)
                ref.replace_self(nodes.Text(text, text))


class MoveModuleTargets(SphinxTransform):
    """
    Move module targets that are the first thing in a section to the section
    title.

    XXX Python specific
    """
    default_priority = 210

    def apply(self, **kwargs):
        # type: (Any) -> None
        for node in self.document.traverse(nodes.target):
            if not node['ids']:
                continue
            if ('ismod' in node and
                    node.parent.__class__ is nodes.section and
                    # index 0 is the section title node
                    node.parent.index(node) == 1):
                node.parent['ids'][0:0] = node['ids']
                node.parent.remove(node)


class HandleCodeBlocks(SphinxTransform):
    """
    Several code block related transformations.
    """
    default_priority = 210

    def apply(self, **kwargs):
        # type: (Any) -> None
        # move doctest blocks out of blockquotes
        for node in self.document.traverse(nodes.block_quote):
            if all(isinstance(child, nodes.doctest_block) for child
                   in node.children):
                node.replace_self(node.children)
        # combine successive doctest blocks
        # for node in self.document.traverse(nodes.doctest_block):
        #    if node not in node.parent.children:
        #        continue
        #    parindex = node.parent.index(node)
        #    while len(node.parent) > parindex+1 and \
        #            isinstance(node.parent[parindex+1], nodes.doctest_block):
        #        node[0] = nodes.Text(node[0] + '\n\n' +
        #                             node.parent[parindex+1][0])
        #        del node.parent[parindex+1]


class AutoNumbering(SphinxTransform):
    """
    Register IDs of tables, figures and literal_blocks to assign numbers.
    """
    default_priority = 210

    def apply(self, **kwargs):
        # type: (Any) -> None
        domain = self.env.get_domain('std')  # type: StandardDomain

        for node in self.document.traverse(nodes.Element):
            if domain.is_enumerable_node(node) and domain.get_numfig_title(node) is not None:
                self.document.note_implicit_target(node)


class SortIds(SphinxTransform):
    """
    Sort secion IDs so that the "id[0-9]+" one comes last.
    """
    default_priority = 261

    def apply(self, **kwargs):
        # type: (Any) -> None
        for node in self.document.traverse(nodes.section):
            if len(node['ids']) > 1 and node['ids'][0].startswith('id'):
                node['ids'] = node['ids'][1:] + [node['ids'][0]]


class CitationReferences(SphinxTransform):
    """
    Replace citation references by pending_xref nodes before the default
    docutils transform tries to resolve them.
    """
    default_priority = 619

    def apply(self, **kwargs):
        # type: (Any) -> None
        # mark citation labels as not smartquoted
        for citation in self.document.traverse(nodes.citation):
            label = cast(nodes.label, citation[0])
            label['support_smartquotes'] = False

        for citation_ref in self.document.traverse(nodes.citation_reference):
            cittext = citation_ref.astext()
            refnode = addnodes.pending_xref(cittext, refdomain='std', reftype='citation',
                                            reftarget=cittext, refwarn=True,
                                            support_smartquotes=False,
                                            ids=citation_ref["ids"])
            refnode.source = citation_ref.source or citation_ref.parent.source
            refnode.line = citation_ref.line or citation_ref.parent.line
            refnode += nodes.Text('[' + cittext + ']')
            citation_ref.parent.replace(citation_ref, refnode)


TRANSLATABLE_NODES = {
    'literal-block': nodes.literal_block,
    'doctest-block': nodes.doctest_block,
    'raw': nodes.raw,
    'index': addnodes.index,
    'image': nodes.image,
}


class ApplySourceWorkaround(SphinxTransform):
    """
    update source and rawsource attributes
    """
    default_priority = 10

    def apply(self, **kwargs):
        # type: (Any) -> None
        for node in self.document.traverse():  # type: nodes.Node
            if isinstance(node, (nodes.TextElement, nodes.image)):
                apply_source_workaround(node)


class AutoIndexUpgrader(SphinxTransform):
    """
    Detect old style; 4 column based indices and automatically upgrade to new style.
    """
    default_priority = 210

    def apply(self, **kwargs):
        # type: (Any) -> None
        for node in self.document.traverse(addnodes.index):
            if 'entries' in node and any(len(entry) == 4 for entry in node['entries']):
                msg = __('4 column based index found. '
                         'It might be a bug of extensions you use: %r') % node['entries']
                logger.warning(msg, location=node)
                for i, entry in enumerate(node['entries']):
                    if len(entry) == 4:
                        node['entries'][i] = entry + (None,)


class ExtraTranslatableNodes(SphinxTransform):
    """
    make nodes translatable
    """
    default_priority = 10

    def apply(self, **kwargs):
        # type: (Any) -> None
        targets = self.config.gettext_additional_targets
        target_nodes = [v for k, v in TRANSLATABLE_NODES.items() if k in targets]
        if not target_nodes:
            return

        def is_translatable_node(node):
            # type: (nodes.Node) -> bool
            return isinstance(node, tuple(target_nodes))

        for node in self.document.traverse(is_translatable_node):  # type: nodes.Element
            node['translatable'] = True


class UnreferencedFootnotesDetector(SphinxTransform):
    """
    detect unreferenced footnotes and emit warnings
    """
    default_priority = 200

    def apply(self, **kwargs):
        # type: (Any) -> None
        for node in self.document.footnotes:
            if node['names'] == []:
                # footnote having duplicated number.  It is already warned at parser.
                pass
            elif node['names'][0] not in self.document.footnote_refs:
                logger.warning(__('Footnote [%s] is not referenced.'), node['names'][0],
                               type='ref', subtype='footnote',
                               location=node)

        for node in self.document.autofootnotes:
            if not any(ref['auto'] == node['auto'] for ref in self.document.autofootnote_refs):
                logger.warning(__('Footnote [#] is not referenced.'),
                               type='ref', subtype='footnote',
                               location=node)


class FigureAligner(SphinxTransform):
    """
    Align figures to center by default.
    """
    default_priority = 700

    def apply(self, **kwargs):
        # type: (Any) -> None
        matcher = NodeMatcher(nodes.table, nodes.figure)
        for node in self.document.traverse(matcher):  # type: nodes.Element
            node.setdefault('align', 'center')


class FilterSystemMessages(SphinxTransform):
    """Filter system messages from a doctree."""
    default_priority = 999

    def apply(self, **kwargs):
        # type: (Any) -> None
        filterlevel = self.config.keep_warnings and 2 or 5
        for node in self.document.traverse(nodes.system_message):
            if node['level'] < filterlevel:
                logger.debug('%s [filtered system message]', node.astext())
                node.parent.remove(node)


class SphinxContentsFilter(ContentsFilter):
    """
    Used with BuildEnvironment.add_toc_from() to discard cross-file links
    within table-of-contents link nodes.
    """
    visit_pending_xref = ContentsFilter.ignore_node_but_process_children

    def visit_image(self, node):
        # type: (nodes.image) -> None
        raise nodes.SkipNode


class SphinxSmartQuotes(SmartQuotes, SphinxTransform):
    """
    Customized SmartQuotes to avoid transform for some extra node types.

    refs: sphinx.parsers.RSTParser
    """
    default_priority = 750

    def apply(self, **kwargs):
        # type: (Any) -> None
        if not self.is_available():
            return

        # override default settings with :confval:`smartquotes_action`
        self.smartquotes_action = self.config.smartquotes_action

        super().apply()

    def is_available(self):
        # type: () -> bool
        builders = self.config.smartquotes_excludes.get('builders', [])
        languages = self.config.smartquotes_excludes.get('languages', [])

        if self.document.settings.smart_quotes is False:
            # disabled by 3rd party extension (workaround)
            return False
        elif self.config.smartquotes is False:
            # disabled by confval smartquotes
            return False
        elif self.app.builder.name in builders:
            # disabled by confval smartquotes_excludes['builders']
            return False
        elif self.config.language in languages:
            # disabled by confval smartquotes_excludes['languages']
            return False

        # confirm selected language supports smart_quotes or not
        language = self.env.settings['language_code']
        for tag in normalize_language_tag(language):
            if tag in smartchars.quotes:
                return True
        else:
            return False

    def get_tokens(self, txtnodes):
        # type: (List[nodes.Text]) -> Generator[Tuple[str, str], None, None]
        # A generator that yields ``(texttype, nodetext)`` tuples for a list
        # of "Text" nodes (interface to ``smartquotes.educate_tokens()``).

        texttype = {True: 'literal',  # "literal" text is not changed:
                    False: 'plain'}
        for txtnode in txtnodes:
            notsmartquotable = not is_smartquotable(txtnode)
            yield (texttype[notsmartquotable], txtnode.astext())


class DoctreeReadEvent(SphinxTransform):
    """Emit :event:`doctree-read` event."""
    default_priority = 880

    def apply(self, **kwargs):
        # type: (Any) -> None
        self.app.emit('doctree-read', self.document)


class ManpageLink(SphinxTransform):
    """Find manpage section numbers and names"""
    default_priority = 999

    def apply(self, **kwargs):
        # type: (Any) -> None
        for node in self.document.traverse(addnodes.manpage):
            manpage = ' '.join([str(x) for x in node.children
                                if isinstance(x, nodes.Text)])
            pattern = r'^(?P<path>(?P<page>.+)[\(\.](?P<section>[1-9]\w*)?\)?)$'  # noqa
            info = {'path': manpage,
                    'page': manpage,
                    'section': ''}
            r = re.match(pattern, manpage)
            if r:
                info = r.groupdict()
            node.attributes.update(info)
