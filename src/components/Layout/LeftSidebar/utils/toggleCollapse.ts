export function toggleCollapse(slug: string) {
   const chevronRightDiv = document.getElementById(`chevron-right-${slug}`);
   const chevronDownDiv = document.getElementById(`chevron-down-${slug}`);
   const childrenDiv = document.getElementById(`children-${slug}`);
   const linkElement = document.getElementById(`link-${slug}`);

   if (chevronRightDiv && chevronDownDiv && childrenDiv) {
      const isHidden = childrenDiv.classList.toggle("hidden");
      chevronRightDiv.classList.toggle("hidden", !isHidden);
      chevronDownDiv.classList.toggle("hidden", isHidden);

      if (isHidden && linkElement) {
         linkElement.classList.remove("font-medium");
         linkElement.classList.add("font-normal");
      } else if (linkElement) {
         linkElement.classList.remove("font-normal");
         linkElement.classList.add("font-medium");
      }
   }
}
