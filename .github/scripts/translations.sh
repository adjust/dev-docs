#!/usr/bin/env bash

poetry run make -e BUILDDIR=locale gettext

for path in locale/*; do
  lang="$(basename "$path")"
  if [[ "$lang" != "gettext" ]]; then
    poetry run sphinx-intl update -p locale/gettext -l "$lang"
  fi
done
