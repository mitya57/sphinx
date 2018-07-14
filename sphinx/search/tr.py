# -*- coding: utf-8 -*-
"""
    sphinx.search.tr
    ~~~~~~~~~~~~~~~~

    Turkish search language: includes the JS Turkish stemmer.

    :copyright: Copyright 2007-2013 by the Sphinx team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

from sphinx.search import SearchLanguage

import snowballstemmer

if False:
    # For type annotation
    from typing import Dict, Set  # NOQA


class SearchTurkish(SearchLanguage):
    lang = 'tr'
    language_name = 'Turkish'
    js_stemmer_rawcode = 'turkish-stemmer.js'
    stopwords = set()  # type: Set[unicode]

    def init(self, options):
        # type: (Dict) -> None
        self.stemmer = snowballstemmer.stemmer('turkish')

    def stem(self, word):
        # type: (unicode) -> unicode
        return self.stemmer.stemWord(word.lower())
