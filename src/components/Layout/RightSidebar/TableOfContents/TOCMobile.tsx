import type { FC } from "react";
import { unescape } from "html-escaper";
import { type Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";

interface TableOfContentsMobileProps {
  onThisPageID: string;
  toc: React.RefObject<HTMLUListElement>;
  headingsLocal: MarkdownHeadingWithId[];
  lang: string;
}

const TableOfContentsMobile: FC<TableOfContentsMobileProps> = ({
  onThisPageID,
  toc,
  headingsLocal,
  lang,
}) => {
  const t = useTranslations(lang as keyof Locales);
  return (
    <div className="xs:block lg:hidden border-[1px] p-2 my-4">
      <h2 id={onThisPageID} className="heading">
        {t("toc.mobile-header")}
      </h2>
      <ul ref={toc} className="pl-4">
        {headingsLocal
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map((heading) => (
            <li
              key={heading.id}
              className={`header-link before:content-none depth-${heading.depth}`}
            >
              <a href={`#${heading.slug}`}>{unescape(heading.text)}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TableOfContentsMobile;
