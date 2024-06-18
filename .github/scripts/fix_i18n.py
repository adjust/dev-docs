import os
import re
import glob

# Define MDX tags and locales
MDX_TAGS = ["Abbr", "Accordion", "ApiVersion", "SdkVersion", "Callout", "CodeBlock", "MinorVersion", "Table", "Tabs", "Tab", "Tile", "ListColumns"]
locales = ["ja", "ko", "zh"]
TAG_LIST = "|".join(MDX_TAGS)

# Process each file
def process_file(file, locale):
   print(f"Fixing tags in {file} for {locale}")

   # Read file content
   with open(file, "r", encoding="utf-8") as f:
      content = f.read()

   # Fix tags
   for tag in MDX_TAGS:
      lowercase_tag = tag.lower()
      content = re.sub(fr"<({lowercase_tag})", fr"<{tag}", content)

   # Fix broken unescaped angle brackets in Japanese content
   if locale == "ja":
      content = re.sub(r"（<）", r"（\\<）", content)

   # Ensure newline between any two tags on the same line
   content = re.sub(fr'(<[^<>]*[\/]?({TAG_LIST})[^<>]*>)([^\n]*)(<[^<>]*[\/]?({TAG_LIST})[^<>]*>)', r'\1\n\4', content)


   # Update slugs
   content = re.sub(r"(slug: *)(\"?en\/?)", fr'\1"{locale}/', content)

   # Update URLs
   content = re.sub(r"https://help.adjust.com/en/", f"https://help.adjust.com/{locale}/", content)

   # Write back the modified content
   with open(file, "w", encoding="utf-8") as f:
      f.write(content)

# Main function to find and process all relevant files
def main():
   for locale in locales:
      pattern = f"src/content/docs/**/**/*-{locale}.mdx"
      files = glob.glob(pattern, recursive=True)
      for file in files:
         print(f"{file}")
         process_file(file, locale)

if __name__ == "__main__":
    main()
