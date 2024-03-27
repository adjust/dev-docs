import classNames from "classnames";
import type { FC } from "react";
import { useState, useEffect } from "react";

const themes = ["light", "dark"];

const icons = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>,
];

const ThemeToggle: FC = () => {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== undefined && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("theme-dark");
    } else {
      root.classList.add("theme-dark");
    }
  }, [theme]);

  return (
    <div className="inline-flex items-center gap-[0.25em] py-[0.33em] px-[0.67em] rounded-[99em] bg-[var(--theme-code-inline-bg)]">
      {themes.map((t, i) => {
        const icon = icons[i];
        const checked = t === theme;
        return (
          <label className={classNames("text-[var(--theme-code-inline-text)] relative flex items-center justify-center opacity-50 focus-within:outline focus-within:outline-2 focus-within:outline-transparent shadow-[0_0_0_0.08em_var(--theme-accent),_0_0_0_0.12em_white]",
          checked ? "opacity-100 text-[var(--theme-accent)]" : "")}>
            {icon}
            <input
              type="radio"
              name="theme-toggle"
              className="absolute opacity-0 t-0 b-0 l-0 r-0 -z-[1]"
              checked={checked}
              value={t}
              title={`Use ${t} theme`}
              aria-label={`Use ${t} theme`}
              onChange={() => {
                localStorage.setItem("theme", t);
                setTheme(t);
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
