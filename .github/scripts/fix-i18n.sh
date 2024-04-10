#!/bin/sh

# This script fixes various issues with localized files
# It loops through all files that end with a locale code
# in the set below and performs transformations using sed

# This script is written using POSIX-compliant syntax and
# should work with any shell interpreter. BASH- and ZSH-
# specific commands must be avoided.

set -- ja ko zh

for locale do

   # Fix broken MDX components in all files

   find 'src/content/docs/' -name "*-$locale.mdx" -type f -exec sh -c \
      'for file do \echo '\''Fixing formatting for '"${locale}"' content'\''; \
      sed -i -e "s/<abbr/<Abbr/g ; \
      s/<accordion/<Accordion/g ; \
      s/<apiversion/<ApiVersion/g ; \
      s/<sdkversion/<SdkVersion/g ; \
      s/<callout/<Callout/g ; \
      s/<minorversion/<MinorVersion/g ; \
      s/<table/<Table/g ; \
      s/<tabs/<Tabs/g ; \
      s/<tab/<Tab/g ; \
      s/<tile/<Tile/g" "${file}"; \
      sed -zri -e "s/((.)\s|(.)\n)(<Callout|<\/Callout)/\2\n\n\4/mg ; \
      s/((.)\s|(.)\n)(<ApiVersion|<\/ApiVersion)/\2\n\n\4/mg ; \
      s/((.)\s|(.)\n)(<SdkVersion|<\/SdkVersion)/\2\n\n\4/mg ; \
      s/((.)\s|(.)\n)(<Tile|<\/Tile)/\2\n\n\4/mg ; \
      s/((.)\s|(.)\n)(<Tabs|<\/Tabs)/\2\n\n\4/mg ; \
      s/((.)\s|(.)\n)(<Tab|<\/Tab)/\2\n\n\4/mg ; \
      s/((.)\s|(.)\n)(<Accordion|<\/Accordion)/\2\n\n\4/mg ; \
      s/((.)\s|(.)\n)(<MinorVersion|<\/MinorVersion)/\2\n\n\4/mg" "${file}"; \
      echo "Updating slugs for '"${locale}"' content"; \
      sed -i -E "s/(slug:)( \"| )(en\/)/\1\2'"${locale}\/"'/g" "${file}"; \
      echo "Updating URLs for '"${locale}"' content"; \
      sed -i -E "s/\/en\//\/'"${locale}"'\//g" "${file}"; done' none {} +

done
