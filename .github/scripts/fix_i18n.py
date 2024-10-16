import re
import glob
import yaml

# Define MDX tags and locales
MDX_TAGS = [
    "Abbr",
    "Accordion",
    "ApiVersion",
    "SdkVersion",
    "Callout",
    "CodeBlock",
    "MinorVersion",
    "Table",
    "Tabs",
    "Tab",
    "Tile",
    "ListColumns",
]
locales = ["ja", "ko", "zh"]
TAG_LIST = "|".join(MDX_TAGS)


# Process each file
def process_file(file, locale):
    print(f"Fixing tags in {file} for {locale}")

    # Read file content
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()

    # Split the front matter (YAML) from the content
    front_matter, file_content = split_front_matter(content)

    # Parse the front matter as YAML and update keys
    front_matter = yaml.safe_load(front_matter)
    updated_front_matter = fix_front_matter(front_matter, locale)

    # Fix the content (non-front matter)
    file_content = fix_file_content(file_content, locale)

    # Rebuild the final content (YAML front matter + content)
    final_content = "---\n" + yaml.dump(updated_front_matter, sort_keys=False, allow_unicode=True) + "---\n" + file_content

    # Write back the modified content
    with open(file, "w", encoding="utf-8") as f:
        f.write(final_content)


# Split the front matter (YAML) from the content
def split_front_matter(content):
    match = re.match(r"^---\n(.*?)\n---\n(.*)", content, re.DOTALL)
    if match:
        return match.group(1), match.group(2)
    return "", content  # If no front matter is found, return empty front matter and original content


# Fix the YAML front matter
def fix_front_matter(front_matter, locale):
    # Update slug
    if "slug" in front_matter and front_matter["slug"].startswith("en/"):
        front_matter["slug"] = f"{locale}/{front_matter['slug'][3:]}"

    # Update redirects slugs
    if "redirects" in front_matter:
        for version, slug in front_matter["redirects"].items():
            if slug.startswith("/en/"):
                front_matter["redirects"][version] = f"/{locale}/{slug[4:]}"

    return front_matter


# Fix MDX content (non-YAML part)
def fix_file_content(content, locale):
    # Fix tags
    for tag in MDX_TAGS:
        lowercase_tag = tag.lower()
        content = re.sub(rf"<({lowercase_tag})", rf"<{tag}", content)

    # Fix broken unescaped angle brackets in Japanese content
    if locale == "ja":
        content = re.sub(r"（<）", r"（\\<）", content)

    # Ensure newline between any two tags on the same line
    lines = content.split("\n")
    fixed_lines = []
    for line in lines:
        line = re.sub(
            rf"(<[^<>]*[\/]?({TAG_LIST})[^<>]*>)(\s*)(<[^<>]*[\/]?({TAG_LIST})[^<>]*>)",
            r"\1\n\4",
            line,
        )
        fixed_lines.append(line)
    content = "\n".join(fixed_lines)

    # Fix escaped headers
    content = re.sub(
        r"^(\s.*?)(\\\{\\#.*?\\\})",
        lambda m: m.group(1) + m.group(2).replace("\\", ""),
        content,
        flags=re.MULTILINE,
    )

    # Update URLs
    content = re.sub(
        r"https://help.adjust.com/en/", f"https://help.adjust.com/{locale}/", content
    )

    # Update internal links
    content = re.sub(r"\(/en/(.*?)\)", rf"(/{locale}/\1)", content)

    # Remove unnecessary IDs
    content = re.sub(r' id="sl-md0000000"', "", content)
    content = re.sub(r"\s?md0000000\s?", "", content)

    return content


# Main function to find and process all relevant files
def main():
    for locale in locales:
        pattern = f"../../src/content/docs/{locale}/**/*.mdx"
        files = glob.glob(pattern, recursive=True)
        for file in files:
            print(f"{file}")
            process_file(file, locale)


if __name__ == "__main__":
    main()
