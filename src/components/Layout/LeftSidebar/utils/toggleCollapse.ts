export function toggleCollapse(slug: string) {
   const chevronRightDiv = document.getElementById(`chevron-right-${slug}`);
   const chevronDownDiv = document.getElementById(`chevron-down-${slug}`);
   const childrenDiv = document.getElementById(`children-${slug}`);
   const linkElement = document.getElementById(`link-${slug}`);

   if (chevronRightDiv && chevronDownDiv && childrenDiv) {
      const isHidden = childrenDiv.classList.toggle("hidden");

      // Toggle chevron visibility
      chevronRightDiv.classList.toggle("hidden", !isHidden);
      chevronDownDiv.classList.toggle("hidden", isHidden);

      if (linkElement) {
         // Toggle link element's font weight
         linkElement.classList.toggle("font-medium", !isHidden);
         linkElement.classList.toggle("font-normal", isHidden);
      }
   }
}
