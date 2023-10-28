import { debounce } from "lodash-es";
import { useCallback, useEffect, useState } from "react";

export function useScrollSpy(elementIds: string[]) {
  const [currentSection, setCurrentSection] = useState(elementIds[0]);
  const [headings, setHeadings] = useState([]);

  const registerHeading = useCallback((id, top) => {
    setHeadings((prev) => [...prev.filter((h) => id !== h.id), { id, top }]);
  }, []);

  const unregisterHeading = useCallback((id) => {
    setHeadings((prev) => prev.filter((h) => id !== h.id));
  }, []);

  useEffect(() => {
    if (elementIds.length === 0 || headings.length === 0) return;

    const onScroll = debounce(() => {
      const y = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top);
      if (y <= 0) {
        setCurrentSection(sortedHeadings[0].id);

        return;
      }
      if (y + windowHeight >= document.body.scrollHeight) {
        setCurrentSection(sortedHeadings[sortedHeadings.length - 1].id);

        return;
      }
      const middle = y + windowHeight / 8;
      let current = sortedHeadings[0].id;
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (middle >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id;
        }
      }
      setCurrentSection(current);
    }, 50);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll, true);
  }, [elementIds, headings]);

  return { currentSection, registerHeading, unregisterHeading };
}
