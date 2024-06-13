import type { MarkdownHeading } from "astro";

const toc = document.getElementById("toc");
const tocList = document.getElementById("toc-list");
const tocMobileList = document.getElementById("toc-mobile-list");
const bigTocList = document.getElementById("big-toc-list");
const isMultiVersion = toc?.getAttribute("data-message") === "true";

let versionNumber = "";
const HEADER_HEIGHT = 150;

export const getTocHeadings = (headers: Element[], versionNumber?: string): MarkdownHeading[] => {
  return headers.map((header) => {
    const text = header.textContent ?? "";
    let slug = header.id;

    if (!slug) {
      slug = text
        .toLocaleLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      header.id = slug;
    }

    if (versionNumber && !slug.startsWith(versionNumber)) {
      slug = `${versionNumber}-${slug}`;
      header.id = slug;
    }

    return {
      depth: Number(header.tagName.replace("H", "")),
      slug,
      text,
    };
  });
};

export const getVersionedHeaders = (): Element[] => {
  const headers = document.querySelectorAll(
    '.article-content h1, .article-content h2:not([class^="Banner__"]), .article-content h3, .article-content h4'
  );
  return Array.from(headers).filter((header) => {
    const parentDiv = header.closest("sdk-version-block") || header.closest("api-version-block");
    if (parentDiv && !parentDiv.matches(".hidden")) {
      versionNumber = parentDiv.getAttribute("data-message")!;
    }
    return parentDiv && !parentDiv.matches(".hidden");
  });
};

export const getHeaders = (): Element[] => {
  return Array.from(document.querySelectorAll(
    '.article-content h1, .article-content h2:not([class^="Banner__"]), .article-content h3, .article-content h4'
  ));
};

export const updateHeadings = (): void => {
  const headers = isMultiVersion ? getVersionedHeaders() : getHeaders();
  const headings = getTocHeadings(headers, versionNumber);

  const tocFragment = document.createDocumentFragment();
  const tocMobileFragment = document.createDocumentFragment();
  const bigTocFragment = document.createDocumentFragment();

  headings.forEach((heading) => {
    const listItem = document.createElement("li");
    listItem.className = `toc-item depth-${heading.depth}`;

    const link = document.createElement("a");
    link.href = `#${heading.slug}`;
    link.textContent = heading.text;
    link.className = "toc-link text-gray-700 hover:text-blue-600";
    link.setAttribute("data-slug", heading.slug);

    listItem.appendChild(link);
    tocFragment.appendChild(listItem);

    if (heading.depth < 4) {
      const bigListItem = listItem.cloneNode(true) as HTMLElement;
      bigTocFragment.appendChild(bigListItem);

      const mobileListItem = listItem.cloneNode(true) as HTMLElement;
      tocMobileFragment.appendChild(mobileListItem);
    }
  });

  tocList!.innerHTML = "";
  tocList!.appendChild(tocFragment);

  tocMobileList!.innerHTML = "";
  tocMobileList!.appendChild(tocMobileFragment);

  bigTocList!.innerHTML = "";
  bigTocList!.appendChild(bigTocFragment);

  if (isMultiVersion) {
    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
      const matchingHeader = headers.find(header => header.id.endsWith(initialHash));
      if (matchingHeader) {
        const targetId = matchingHeader.id;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
          setTimeout(() => {
            history.pushState(null, "", `#${targetId}`);
          }, 300); // Adjust this timeout if needed
        }
      }
    }
  }
};

// Add event listeners for the table of contents using event delegation
document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.matches(".toc-link")) {
    event.preventDefault();
    const id = target.getAttribute("data-slug");
    if (id) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
        setTimeout(() => {
          history.pushState(null, "", `#${id}`);
        }, 300); // Adjust this timeout if needed
      }
    }
  }
});
