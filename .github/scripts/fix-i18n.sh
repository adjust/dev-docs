#!/bin/sh

# This script fixes various issues with localized files.
# It loops through all files that end with a locale code
# in the set below and performs transformations using sed.

# This script is written using POSIX-compliant syntax and
# should work with any shell interpreter. BASH- and ZSH-
# specific commands must be avoided.

export MDX_TAGS="Abbr Accordion ApiVersion SdkVersion Callout CodeBlock MinorVersion Table Tabs Tab Tile"
TAG_LIST=$(echo "$MDX_TAGS" | tr ' ' '|')
export TAG_LIST

set -- ja ko zh

for locale; do
    find 'src/content/docs/' -name "*-$locale.mdx" -type f -exec sh -c '
        process_file() {
            file="$1"
            locale="$2"

            # Loop through properly formatted tags
            echo "Fixing tags in ${file} for ${locale}"
            for tag in $MDX_TAGS; do
                # Generate sed command to replace lowercase tag with properly formatted tag
                lowercase_tag=$(echo $tag | tr "[:upper:]" "[:lower:]")
                sed_command="s/<\(${lowercase_tag}\)/<${tag}/g ;"
                # Execute sed command
                sed -i -e "${sed_command}" "$file"
            done

            # Fix broken unescaped angle brackets in Japanese content
            sed -i -E "s/（<）/（\\\\<）/g" "$file"

            # Ensure there is a newline between any two tags on the same line. Only fix items
            # that contain one of the tags in the $TAG_LIST above.
            sed -i -E -e "s/(<[^<>]*[\/]?($TAG_LIST)[^<>]*>)[[:space:]]*(<[^<>]*[\/]?($TAG_LIST)[^<>]*>)/\1\n\3/g" "$file"

            echo "Updating slugs in ${file} for ${locale}"
            sed -i -E -e "s/(slug: *)(\"?en\/?)/\1\"${locale}\//g" "$file"

            echo "Updating URLs in ${file} for ${locale}"
            sed -i -e "s/\/en\//\/${locale}\//g" "$file"
        }

        for file do
            process_file "$file" "$0"
        done
    ' "$locale" {} +
done
