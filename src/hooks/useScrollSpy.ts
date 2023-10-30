import { useEffect, useState, useRef } from "react";

export const useScrollSpy = () => {
  const observer = useRef<IntersectionObserver | undefined>(undefined);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
          break;
        }
      }
    };

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "-100px 0px -66%",
      threshold: 0,
    });

    const elements = document.querySelectorAll("h2, h3, h4");
    elements.forEach((elem) => observer.current?.observe(elem));

    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
};
