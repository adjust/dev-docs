/** @jsxImportSource react */

import type { FC } from "react";


const TabComponent: FC<{
  content: React.ReactElement;
  uniqueId: string;
}> = ({ content, uniqueId }) => {
  return (
    <div id={uniqueId} className="hidden">
      {/* additional div in case of adding styles to the content */}
      <div id="tab-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default TabComponent;
