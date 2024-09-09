import re
import glob

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
        r"^(#{1,6}\s.*?)(\\\{\\#.*?\\\})",
        lambda m: m.group(1) + m.group(2).replace("\\", ""),
        content,
        flags=re.MULTILINE,
    )

    # Update slugs
    content = re.sub(r"(slug: *)(\"?en\/?)", rf'\1"{locale}/', content)

    # Update URLs
    content = re.sub(
        r"https://help.adjust.com/en/", f"https://help.adjust.com/{locale}/", content
    )

    # Update internal links
    content = re.sub(r"\(/en/(.*?)\)", rf"(/{locale}/\1)", content)

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
