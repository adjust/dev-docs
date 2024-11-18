interface TabHeader {
   syncKey?: string;
   tabId: string;
   element: HTMLElement;
}

interface TabContent {
   id: string;
   syncKey?: string;
   element: HTMLElement;
}

/**
 * Contains tab groups for synchronized and non-synchronized content
 */
export class TabGroup {
   // To make syncing easier, store all TabGroup instances in an array
   static tabGroups: TabGroup[] = [];

   id: string;
   element: HTMLElement;
   headers: TabHeader[];
   tabs: TabContent[];

   /**
    * Create a TabGroup by passing a .tab-group element
    * @param element The tab group parent element
    */
   constructor(element: HTMLElement) {
      this.id = element.id;
      this.element = element;

      // Initialize headers and tabs
      this.headers = Array.from(
         element.querySelectorAll(":scope > .tab-row > .tab-header"),
      ).map(
         (tab) => ({
            element: tab as HTMLElement,
            tabId: tab.getAttribute("data-id")!,
            syncKey: tab.getAttribute("data-sync") || "",
         }),
      );

      this.tabs = Array.from(
         element.querySelectorAll(":scope > .tab-content-block > .tab-content"),
      ).map((content) => ({
         element: content as HTMLElement,
         id: content.id,
         syncKey: content.getAttribute("data-sync") || "",
      }));

      // Add an event listener to each header to facilitate switching
      this.headers.forEach((header, index) => {
         header.element.addEventListener("click", () => {
            TabGroup.syncTabs(this, header.tabId, header.syncKey);
         });

         header.element.addEventListener("keydown", (event) => {
            this.handleKeydown(event, index);
         });
      });

      // Automatically activate the first tab
      this.activateFirstTab();

      // Add this instance to the static list of TabGroups
      TabGroup.tabGroups.push(this);
   }

   /**
    * Sets the first tab in each tab group to active by default
    */
   activateFirstTab(): void {
      if (this.headers.length > 0) {
         this.headers[0].element.classList.add("active");
         this.headers[0].element.setAttribute("aria-selected", "true");
      }
      if (this.tabs.length > 0) {
         this.tabs[0].element.classList.remove("hidden");
      }
   }

   /**
    * Synchronizes tabs with a matching syncKey
    * @param activeGroup The current TabGroup
    * @param tabId The ID of the selected tab
    * @param syncKey The syncKey of the selected tab
    */
   static syncTabs(
      activeGroup: TabGroup,
      tabId: string,
      syncKey?: string,
   ): void {
      if (syncKey) {
         // Track if any matching syncKey was found in other groups
         let syncFound = false;

         // Loop through all TabGroups to apply syncing based on syncKey
         for (const group of TabGroup.tabGroups) {
            const matchedHeader = group.headers.find((header) =>
               header.syncKey === syncKey
            );
            const matchedTab = group.tabs.find((tab) =>
               tab.syncKey === syncKey
            );

            if (matchedHeader && matchedTab) {
               syncFound = true;

               // Update headers in this group
               group.headers.forEach((header) => {
                  const isActive = header === matchedHeader;
                  header.element.classList.toggle(
                     "active",
                     isActive,
                  );
                  header.element.setAttribute(
                     "aria-selected",
                     String(isActive),
                  );
               });

               // Update tabs in this group
               group.tabs.forEach((tab) => {
                  tab.element.classList.toggle("hidden", tab !== matchedTab);
               });
            }
         }

         // If no matching syncKey was found in any other group, fall back to updating only the active group
         if (!syncFound) {
            activeGroup.updateTabsByTabId(tabId);
         }
      } else {
         // No syncKey provided, so update only the clicked group based on tabId
         activeGroup.updateTabsByTabId(tabId);
      }
   }

   /**
    * Update tab appearance by tab ID
    * @param tabId The ID of the selected tab
    */
   private updateTabsByTabId(tabId: string): void {
      // Update headers in this group
      this.headers.forEach((header) => {
         const isActive = header.tabId === tabId;
         header.element.classList.toggle("active", isActive);
         header.element.setAttribute("aria-selected", String(isActive));
      });

      // Update tabs in this group
      this.tabs.forEach((tab) => {
         tab.element.classList.toggle("hidden", tab.id !== tabId);
      });
   }

   /**
    * Enables using arrow keys to select tabs
    * @param event The keyboard event (key)
    * @param currentIndex The currently selected tab
    */
   private handleKeydown(event: KeyboardEvent, currentIndex: number): void {
      const { headers } = this;
      let newIndex = currentIndex;

      switch (event.key) {
         case "ArrowRight":
            newIndex = (currentIndex + 1) % headers.length;
            headers[newIndex].element.focus();
            break;

         case "ArrowLeft":
            newIndex = (currentIndex - 1 + headers.length) % headers.length;
            headers[newIndex].element.focus();
            break;

         case "Enter":
         case " ":
            event.preventDefault();
            TabGroup.syncTabs(
               this,
               headers[currentIndex].tabId,
               headers[currentIndex].syncKey,
            );
            break;
      }
   }
}
