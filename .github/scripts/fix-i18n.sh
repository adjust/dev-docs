#!/bin/sh

LOCALES=("ja" "ko" "zh")

for locale in ${LOCALES[@]}; do

   # Fix broken MDX components in all files

   for file in src/content/docs/**/*-$locale.mdx; do
      echo "Fixing formatting for $locale content";

      sed -i -e 's/<abbr/<Abbr/g' $file;
      sed -i -e 's/[^\n]<accordion/\n\n<Accordion/g' $file;
      sed -i -e 's/<accordion/<Accordion/g' $file;
      sed -i -e 's/<badge/<Badge/g' $file;
      sed -i -e 's/[^\n]<callout/\n\n<Callout/g' $file;
      sed -i -e 's/<callout/<Callout/g' $file;
      sed -i -e 's/<icon/<Icon/g' $file;
      sed -i -e 's/<menuselection/<MenuSelection/g' $file;
      sed -i -e 's/[^\n]<minorversion/\n\n<MinorVersion/g' $file;
      sed -i -e 's/<minorversion/<MinorVersion/g' $file;
      sed -i -e 's/[^\n]<table/\n\n<Table/g' $file;
      sed -i -e 's/<table/<Table/g' $file;
      sed -i -e 's/[^\n]<tabs/\n\n<Tabs/g' $file;
      sed -i -e 's/<tabs/<Tabs/g' $file;
      sed -i -e 's/[^\n]<\/Tabs/\n<\/Tabs/g' $file;
      sed -i -e 's/[^\n]<tab/\n<Tab/g' $file;
      sed -i -e 's/<tab/<Tab/g' $file;
      sed -i -e 's/[^\n]<tile/\n\n<Tile/g' $file;
      sed -i -e 's/<tile/<Tile/g' $file;

      # Add newlines before the ending tag, if needed

      sed -zri  's/([^\n]\n)(<\/Callout)/\1\n\2/g' $file;
      sed -zri  's/([^\n]\n)(<\/Tile)/\1\n\2/g' $file;
      sed -zri  's/([^\n]\n)(<\/Tab>)/\1\n\2/g' $file;
      sed -zri  's/([^\n]\n)(<\/Accordion)/\1\n\2/g' $file;
      sed -zri  's/([^\n]\n)(<\/MinorVersion)/\1\n\2/g' $file;
   done;

   # Replace slugs

   for file in src/content/docs/**/*-$locale.mdx; do
      echo "Updating slugs for $locale content";
      sed -i -E "s/(slug)(.*)(en)/\1\2$locale/g" $file;
   done;

   for file in src/content/docs/**/*-$locale.mdx; do
      echo "Updating URLs for $locale content";
      sed -i -E "s/\/en\//\/$locale\//g" $file;
   done;

done;
