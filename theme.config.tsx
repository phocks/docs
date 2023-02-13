import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>(╥﹏╥)</span>,
  project: {
    link: "https://github.com/phocks",
  },
  docsRepositoryBase: "https://github.com/phocks/docs/tree/main/",
  footer: {
    text: `© Joshua Byrd. ${new Date().getFullYear()}`,
  },
  primaryHue: { dark: 202, light: 202 },
  nextThemes: {
    defaultTheme: "dark",
  },
  banner: {
    key: '2.0-release',
    text: <a href="https://nextra.site" target="_blank">
      🎉 Nextra 2.0 is released. Read more →
    </a>,
  },
};

export default config;
