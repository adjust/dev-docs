import { JSDOM } from 'jsdom';

interface CodeExtractionResult {
   code: string;
   lang?: string;
}

export const extractCodeFromHTML = (htmlString: string): CodeExtractionResult => {
   const { window } = new JSDOM(htmlString);
   const { document } = window;

   const codeBlocks = document.querySelectorAll('.ec-line .code');
   const preElement = document.querySelector("pre[data-language]");

   let lang = preElement ? preElement.getAttribute("data-language") || "" : "";
   const extractedCode = Array.from(codeBlocks)
      .map(block => block.textContent || '')
      .join('\n');

   return { code: extractedCode.trim(), lang };  // Remove any trailing newline
};
