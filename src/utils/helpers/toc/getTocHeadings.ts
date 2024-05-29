import type { MarkdownHeading } from "astro";

export const getTocHeadings = () => {
  // this selector is more accurate cause we don`t need nested headers
  const headings = document.querySelectorAll(
    ".article-content > :is(h1, h2, h3, h4)"
  );

  const headingsParsed: MarkdownHeading[] = [];
  const duplicates: { [key: string]: number } = {};
  // parsing data for the TOC
  for (const heading of headings) {
    const text = heading.textContent;
    let slug = "";

    if (!heading.id) {
      heading.id = text
        ?.toLocaleLowerCase()
        .replace(/\W(?<!\s)/gi, "")
        .split(" ")
        .join("-")!;
    }

    slug = heading.id

    const isSavedHeading = !!headingsParsed.find(
      (savedHeading) => savedHeading.slug === slug
    );

    if (isSavedHeading) {
      if (!duplicates[slug]) {
        duplicates[slug] = 1;
      } else {
        duplicates[slug] = duplicates[slug] + 1;
      }

      slug = `${slug}-${duplicates[slug]}`;
    }

    headingsParsed.push({
      depth: +heading.tagName.replace("H", ""),
      slug,
      text: text,
    } as MarkdownHeading);
  }

  return headingsParsed;
};
