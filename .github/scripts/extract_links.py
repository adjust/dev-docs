import os
import re
import glob
import tempfile

# Regex patterns for Markdown links and headers
markdown_link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
header_pattern = re.compile(r'^\s{0,3}#{1,6}\s')

def extract_links(file):
   links = []
   with open(file, 'r', encoding='utf-8') as f:
      for line in f:
         if not header_pattern.match(line):
               links.extend(markdown_link_pattern.findall(line))
   return links

def main():
   all_links = []

   pattern = f"src/content/docs/**/*.mdx"
   files = glob.glob(pattern, recursive=True)

   for file in files:
      links = extract_links(file)
      all_links.extend(links)

   # Create a temporary file to store the extracted links
   with tempfile.NamedTemporaryFile(delete=False, mode='w', suffix='.md', prefix='extracted_links_', dir='.') as temp_file:
      for text, url in all_links:
         temp_file.write(f'[{text}]({url})\n')

      # Print the name of the temporary file for GitHub Actions
      print(f"::set-output name=file::{temp_file.name}")

if __name__ == "__main__":
    main()
