# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'Adjust SDK documentation'
copyright = '2023, Adjust GmbH'
author = 'Adjust GmbH'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
   "myst_parser",
   "sphinx_design",
   "sphinx_multiversion",
   "sphinxcontrib.images",
   "sphinx_copybutton",
   "sphinxcontrib.mermaid",
   "sphinx_tippy",
   "sphinx_external_toc"
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', '.venv']
root_doc = "index"

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

html_theme = "furo"
html_theme_options = {
    "source_repository": "https://github.com/adjust/sdk-docs/",
    "source_branch": "main",
    "source_directory": "docs/",
    "dark_logo": "logo-dark.svg",
    "light_logo": "logo-light.svg",
    "sidebar_hide_name": True,
}
html_css_files = [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
    "css/custom.css",
]

# -- Options for MyST parser -------------------------------------------------

myst_enable_extensions = [
   "colon_fence",
   "substitution",
   "tasklist",
   "deflist",
   "fieldlist",
   "attrs_inline",
   "attrs_block",
]

myst_heading_anchors = 3
myst_enable_checkboxes = True

images_config = {
    'override_image_directive': True,
    'download': False,
    'default_show_title': True,
}

smv_branch_whitelist = r'^(main|v5).*$'

# Set up localization repositories

locale_dirs = ['locale/']
gettext_compact = False

# Add substitution for global prolog

myst_substitutions = {
    "eventToken": "*`g3mfiw`*",
    "uniqueEventId": "*`5e85484b-1ebc-4141-aab7-25b869e54c49`*",
    "callbackId": "*`f2e728d8-271b-49ab-80ea-27830a215147`*",
    "ios_version": "4.33.4",
}

tippy_anchor_parent_selector = "div.content"
tippy_tip_selector = "div.notranslate, dt, code"

mermaid_version = ""

myst_url_schemes = {
    "http": None,
    "https": None,
    "hc": "https://help.adjust.com/en/article/{{path}}#{{fragment}}"
}
