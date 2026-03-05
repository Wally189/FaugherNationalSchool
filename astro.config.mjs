import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const publicSiteUrl = process.env.PUBLIC_SITE_URL ?? "https://www.faughernationalschool.ie";
const sitePath = new URL(publicSiteUrl).pathname.replace(/\/$/, "");
const base = sitePath === "" ? "/" : sitePath;

export default defineConfig({
  site: publicSiteUrl,
  base,
  integrations: [sitemap()],
  trailingSlash: "never"
});
