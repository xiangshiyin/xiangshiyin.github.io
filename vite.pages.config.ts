import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const site = JSON.parse(
  readFileSync(new URL("./content/site.json", import.meta.url), "utf8"),
);

export default defineConfig({
  plugins: [
    react(),
    {
      name: "publisher-content-metadata",
      transformIndexHtml(html: string) {
        return html
          .replace(/<title>.*?<\/title>/, `<title>${site.pageTitle}</title>`)
          .replaceAll("North &amp; Field Press", site.publisherName)
          .replace("Independent books, thoughtfully made. Explore fiction, nonfiction, essays, and poetry from North & Field Press.", site.pageDescription)
          .replace("Books for the curious at heart.", site.hero.highlightedHeadline);
      },
    },
  ],
  resolve: {
    alias: {
      "@": projectRoot,
    },
  },
  base: "./",
  build: { outDir: "dist-pages", emptyOutDir: true },
});
