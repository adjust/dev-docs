const HEADER_HEIGHT = 150;
let activeId = "";

export const handleScrollSpy = () => {
   const scrollPos = window.scrollY + HEADER_HEIGHT;
   const activeHeaders = document.querySelectorAll(
      '.article-content h1, .article-content h2:not([class^="Banner__"]), .article-content h3, .article-content h4'
   );

   let newActiveId = "";

   activeHeaders.forEach((header) => {
      const headingElement = header as HTMLElement;
      const offsetTop = headingElement.offsetTop;
      const offsetHeight = headingElement.offsetHeight;

      if (offsetTop <= scrollPos && offsetTop + offsetHeight >= scrollPos) {
         const id = headingElement.getAttribute("id");
         if (id) {
            newActiveId = id;
         }
      }
   });

   if (newActiveId && newActiveId !== activeId) {
      activeId = newActiveId;
      document.querySelectorAll(".toc-link").forEach((link) => {
         const isActive = link.getAttribute("data-slug") === activeId;
         link.classList.toggle("font-medium", isActive);
         link.classList.toggle("font-normal", !isActive);
      });
   }

   // Request the next animation frame
   requestAnimationFrame(handleScrollSpy);
};
