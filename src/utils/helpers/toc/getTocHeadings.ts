import type { MarkdownHeading } from "astro";

const HEADER_HEIGHT = 150;

export const getTocHeadings = (headers: Element[]): MarkdownHeading[] => {
  return headers.map((header) => {
    const text = header.textContent ?? "";
    let slug = header.id;

    if (!slug) {
      slug = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      header.id = slug;
    }

    return {
      depth: Number(header.tagName.replace("H", "")),
      slug,
      text,
    };
  });
};

const removeHeaderIds = () => {
  const headers = Array.from(document.querySelectorAll(
    '.article-content h1, .article-content h2:not([class^="Banner__"]), .article-content h3, .article-content h4'
  ));
  headers.filter((header) => {
    const parentDiv = header.closest("sdk-version-block") || header.closest("api-version-block");
    if (parentDiv && parentDiv.matches(".hidden")) {
      header.removeAttribute("id")
    }
  })
}

export const getHeaders = (): Element[] | false => {
  const headers = Array.from(document.querySelectorAll(
    '.article-content h1, .article-content h2:not([class^="Banner__"]), .article-content h3, .article-content h4'
  ));

  // Check for versioned headers
  const versionedHeaders = headers.filter((header) => {
    const parentDiv = header.closest("sdk-version-block") || header.closest("api-version-block");
    if (parentDiv && !parentDiv.matches(".hidden")) {
      return true;
    }
    return false;
  });

  return versionedHeaders.length > 0 ? versionedHeaders : false;
};

export const updateHeadings = (): void => {
  const toc = document.getElementById("toc");
  const bigToc = document.getElementById("big-toc");
  const mobileToc = document.getElementById("toc-mobile");
  const tocList = document.getElementById("toc-list");
  const tocMobileList = document.getElementById("toc-mobile-list");
  const bigTocList = document.getElementById("big-toc-list");

  let headers = getHeaders();
  if (!toc || !bigToc || !mobileToc || !tocList || !tocMobileList || !bigTocList) return;

  if (headers === false) {
    [toc, bigToc, mobileToc].forEach(el => el.classList.add("!hidden"));
    return;
  }
  removeHeaderIds();
  const headings = getTocHeadings(headers);

  if (headings.length === 0) {
    [toc, bigToc, mobileToc].forEach(el => el.classList.add("!hidden"));
    return;
  }

  const createTocItem = (heading: MarkdownHeading) => {
    const listItem = document.createElement("li");
    listItem.className = `toc-item depth-${heading.depth} ml-${heading.depth > 2 ? 6 : 0}`;

    const link = document.createElement("a");
    link.href = `#${heading.slug}`;
    link.textContent = heading.text;
    link.className = "toc-link text-gray-700 hover:text-blue-600 hover:no-underline";
    link.setAttribute("data-slug", heading.slug);

    listItem.appendChild(link);
    return listItem;
  };

  const fragments = {
    toc: document.createDocumentFragment(),
    tocMobile: document.createDocumentFragment(),
    bigToc: document.createDocumentFragment()
  };

  headings.forEach(heading => {
    const listItem = createTocItem(heading);
    fragments.toc.appendChild(listItem);

    if (heading.depth < 5) {
      fragments.bigToc.appendChild(listItem.cloneNode(true));
      fragments.tocMobile.appendChild(listItem.cloneNode(true));
    }
  });

  [tocList, tocMobileList, bigTocList].forEach(list => list.innerHTML = "");

  tocList.appendChild(fragments.toc);
  tocMobileList.appendChild(fragments.tocMobile);
  bigTocList.appendChild(fragments.bigToc);

  [toc, bigToc, mobileToc].forEach(el => el.classList.remove("!hidden"));

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
        }, 300);
      }
    }
  }
};

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
        }, 300);
      }
    }
  }
});
