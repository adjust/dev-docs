#!/bin/sh

# This script fixes various issues with localized files
# It loops through all files that end with a locale code
# in the set below and performs transformations using sed

# This script is written using POSIX-compliant syntax and
# should work with any shell interpreter. BASH- and ZSH-
# specific commands must be avoided.

set -- ja ko zh

for locale; do
    find 'src/content/docs/' -name "*-$locale.mdx" -type f -exec sh -c '
        process_file() {
            file="$1"
            locale="$2"
            
            echo "Fixing formatting for ${locale} content"
            sed -i "" -e "
                s/<abbr/<Abbr/g ;
                s/<accordion/<Accordion/g ;
                s/<apiversion/<ApiVersion/g ;
                s/<sdkversion/<SdkVersion/g ;
                s/<callout/<Callout/g ;
                s/<minorversion/<MinorVersion/g ;
                s/<table/<Table/g ;
                s/<tabs/<Tabs/g ;
                s/<tab/<Tab/g ;
                s/<tile/<Tile/g ;
            " "$file"

            echo "Updating slugs for ${locale} content"
            sed -i "" -e "s/\(slug:\)\( \"\| \)\(en\/\)/\1\2${locale}\//g" "$file"

            echo "Updating URLs for ${locale} content"
            sed -i "" -e "s/\/en\//\/${locale}\//g" "$file"
        }
        
        for file do
            process_file "$file" "$0"
        done
    ' "$locale" {} +
done
