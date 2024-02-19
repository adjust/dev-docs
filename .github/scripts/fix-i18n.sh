#!/bin/sh

set -- ja ko zh

for locale in "$@"; do

    # Fix broken MDX components in all files

    find 'src/content/docs/' -name "*-$locale.mdx" -type f -exec sh -c \
    'for file do echo '\''Fixing formatting for '"${locale}"' content'\''; \
    sed -i -e "s/<abbr/<Abbr/g ; \
    s/[^\n]<accordion/\n\n<Accordion/g ; \
    s/<accordion/<Accordion/g ; \
    s/<badge/<Badge/g ; \
    s/[^\n]<callout/\n\n<Callout/g ; \
    s/<callout/<Callout/g ; \
    s/<icon/<Icon/g ; \
    s/<menuselection/<MenuSelection/g ; \
    s/[^\n]<minorversion/\n\n<MinorVersion/g ; \
    s/<minorversion/<MinorVersion/g ; \
    s/[^\n]<table/\n\n<Table/g ; \
    s/<table/<Table/g ; \
    s/[^\n]<tabs/\n\n<Tabs/g ; \
    s/<tabs/<Tabs/g ; \
    s/[^\n]<\/Tabs/\n<\/Tabs/g ; \
    s/[^\n]<tab/\n<Tab/g ; \
    s/<tab/<Tab/g ; \
    s/[^\n]<tile/\n\n<Tile/g ; \
    s/<tile/<Tile/g" "${file}"; \
    sed -zri -e  "s/([^\n]\n)(<\/Callout)/\1\n\2/g ; \
    s/([^\n]\n)(<\/Tile)/\1\n\2/g ; \
    s/([^\n]\n)(<\/Tab>)/\1\n\2/g ; \
    s/([^\n]\n)(<\/Accordion)/\1\n\2/g ; \
    s/([^\n]\n)(<\/MinorVersion)/\1\n\2/g" "${file}"; \
    echo "Updating slugs for '"${locale}"' content"; \
    sed -i -E "s/(slug)(.*)(en)/\1\2'"${locale}"'/g" "${file}"; \
    echo "Updating URLs for '"${locale}"' content"; \
    sed -i -E "s/\/en\//\/'"${locale}"'\//g" "${file}"; done' none {} +

done
