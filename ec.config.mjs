import { defineEcConfig } from 'astro-expressive-code';
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineEcConfig({
   defaultProps: {
      wrap: true,
      showLineNumbers: true,
   },
   // This is where you can pass your plugin options
   plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
   frames: {
      extractFileNameFromCode: true
   },
   styleOverrides: {
      textMarkers: {
         markBackground: "#ddebf9"
      },
      frames: {
         editorTabBarBackground: "#f4f6f9",
         terminalTitlebarBackground: "#f4f6f9",
         terminalBackground: "var(--code-background)"
      }
   },
   themes: ["github-light"]
})
