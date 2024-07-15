import type { AstroIntegration } from "astro";
import fs from "fs";
import path from "path";

const langs = ["ja", "ko", "zh"]

function copyFiles(srcDir: string, destDir: string) {
   if (!fs.existsSync(srcDir)) {
      console.error(`Source directory "${srcDir}" does not exist.`);
      return;
   }
   if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
   }

   const entries = fs.readdirSync(srcDir, { withFileTypes: true });

   for (const entry of entries) {
      const srcPath = path.join(srcDir, entry.name);
      const destPath = path.join(destDir, entry.name);

      if (entry.isDirectory()) {
         copyFiles(srcPath, destPath);
      } else {
         fs.copyFileSync(srcPath, destPath);
      }
   }
}

export default function astroPluginCopyTranslations(): AstroIntegration {
   return {
      name: "astro-plugin-copy-translations",
      hooks: {
         "astro:config:setup": ({ logger }) => {
            for (const lang of langs) {
               const srcDir = path.resolve(`src/translations/${lang}`);
               const destDir = path.resolve(`src/content/docs/${lang}`);
               logger.info(`Copying translated files from ${srcDir} to ${destDir}`);
               copyFiles(srcDir, destDir);
            }
            logger.info("Copying finished");
         }
      }
   };
}
