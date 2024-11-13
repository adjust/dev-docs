import { defineEcConfig } from 'astro-expressive-code'
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";

export default defineEcConfig({
   defaultProps: {
      wrap: true
   },
   // This is where you can pass your plugin options
   plugins: [pluginCollapsibleSections()],
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
