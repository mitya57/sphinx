# -*- coding: utf-8 -*-
"""
    sphinx.search.ro
    ~~~~~~~~~~~~~~~~

    Romanian search language: includes the JS Romanian stemmer.

    :copyright: Copyright 2007-2013 by the Sphinx team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

from sphinx.search import SearchLanguage

import snowballstemmer

if False:
    # For type annotation
    from typing import Dict, Set  # NOQA


class SearchRomanian(SearchLanguage):
    lang = 'ro'
    language_name = 'Romanian'
    js_stemmer_rawcode = 'romanian-stemmer.js'
    stopwords = set()  # type: Set[unicode]

    def init(self, options):
        # type: (Dict) -> None
        self.stemmer = snowballstemmer.stemmer('romanian')

    def stem(self, word):
        # type: (unicode) -> unicode
        return self.stemmer.stemWord(word.lower())
