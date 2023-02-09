#!/usr/bin/env bash

poetry run make gettext

for path in locale/*; do
  lang="$(basename "$path")"
  poetry run sphinx-intl update -l "$lang"
done
