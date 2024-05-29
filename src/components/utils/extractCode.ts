import { JSDOM } from 'jsdom';

interface CodeExtractionResult {
   code: string;
   lang?: string;
}

export const extractCodeFromHTML = (htmlString: string): CodeExtractionResult => {
   const { window } = new JSDOM(htmlString);
   const { document } = window;

   const codeBlocks = document.querySelectorAll('.ec-line .code');

   let extractedCode = '';
   let lang = "";

   codeBlocks.forEach(block => {
      const line = block.textContent || '';
      extractedCode += line + '\n';
      const preElement = block.closest("pre[data-language]");
      if (preElement) {
         let preLang = preElement.getAttribute("data-language");
         lang = preLang ? preLang : "";
      }
   });

   return { code: extractedCode.trim(), lang }  // Remove any trailing newline
};
