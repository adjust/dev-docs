import { type RefObject, useCallback, useEffect, useRef } from "react";

type Callback = () => void;

const now = () => {
  return new Date().getTime();
};

export const useWaitToTrigger = (
  callback: Callback,
  ref: RefObject<HTMLElement>,
  delay: number,
  type: "inside" | "outside"
) => {
  const mouseEnterTimestamp = useRef<number | undefined>(undefined);
  const mouseLeftTimestamp = useRef<number | undefined>(undefined);
  const timer = useRef<NodeJS.Timeout | undefined>(undefined);

  const savedCallback = useRef<Callback | undefined>(undefined);

  useEffect(() => {
    savedCallback.current = callback;

    if (ref.current) {
      ref.current.addEventListener("mouseenter", handleMouseEnter);
      ref.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseenter", handleMouseEnter);
        ref.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [ref, callback]);

  const handleMouseEnter = useCallback(() => {
    mouseEnterTimestamp.current = now();

    if (type === "inside") {
      timer.current = setTimeout(savedCallback.current as Callback, delay);
    } else {
      if (now() - (mouseLeftTimestamp?.current as number) < delay) {
        clearTimeout(timer.current);
      }
    }
  }, [callback]);

  const handleMouseLeave = useCallback(() => {
    mouseLeftTimestamp.current = now();

    if (type === "inside") {
      if (now() - (mouseLeftTimestamp?.current as number) < delay) {
        clearTimeout(timer.current);
      }
    } else {
      timer.current = setTimeout(savedCallback.current as Callback, delay);
    }
  }, [callback]);
};
