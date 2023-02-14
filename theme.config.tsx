import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>(╥﹏╥)</span>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s :::: a phocks joint",
    };
  },
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
    key: 'so-glad',
    text: <span>We are so glad you're here, alive and well...</span>,
  },
};

export default config;
