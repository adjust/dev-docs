import os
import re
import sys


def update_headings_in_file(filepath):
    # Regular expression to match the old header format
    pattern = re.compile(r"^(#{2,6}) \[([^\]]+)\]\(([^)]+)\)$", re.MULTILINE)

    with open(filepath, "r", encoding="utf-8") as file:
        content = file.read()

    # Replace old header format with the new one
    updated_content = pattern.sub(r"\1 \2 {#\3}", content)

    if content != updated_content:
        with open(filepath, "w", encoding="utf-8") as file:
            file.write(updated_content)
        print(f"Updated file: {filepath}")
    else:
        print(f"No changes needed for file: {filepath}")


def update_headings_in_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".mdx"):
                filepath = os.path.join(root, file)
                update_headings_in_file(filepath)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python update_headings.py <directory>")
        sys.exit(1)

    directory = sys.argv[1]

    if not os.path.isdir(directory):
        print(f"Error: {directory} is not a valid directory.")
        sys.exit(1)

    update_headings_in_directory(directory)
