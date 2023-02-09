#!/usr/bin/env bash

# Run from the docs directory
cd docs

# Generate the new translation files
poetry run make gettext

# Go through each directory and update with any changes
for path in locale/*; do
  lang="$(basename "$path")"
  poetry run sphinx-intl update -l "$lang"
done
