import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.faughernationalschool.ie",
  integrations: [sitemap()],
  trailingSlash: "never"
});
