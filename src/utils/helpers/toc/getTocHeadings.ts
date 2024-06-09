import type { MarkdownHeading } from "astro";

export const getTocHeadings = (filteredHeaders: Element[], versionNumber?: string): MarkdownHeading[] => {
  return filteredHeaders.map((heading) => {
    const text = heading.textContent ?? "";
    let slug = heading.id;

    if (!slug) {
      slug = text
        .toLocaleLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      heading.id = slug;
    }

    if (versionNumber && !slug.startsWith(versionNumber)) {
      slug = `${versionNumber}-${slug}`;
      heading.id = slug;
    }

    return {
      depth: Number(heading.tagName.replace("H", "")),
      slug,
      text,
    };
  });
};
