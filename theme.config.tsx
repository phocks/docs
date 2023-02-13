import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>JBDoc</span>,
  project: {
    link: "https://github.com/phocks",
  },
  // chat: {
  //   link: 'https://discord.gg/f6TUahfpdJ',
  // },
  docsRepositoryBase: "https://github.com/phocks/docs/tree/main/",
  footer: {
    text: `© Joshua Byrd. ${new Date().getFullYear()}.`,
  },
  primaryHue: { dark: 160, light: 160 },
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;
