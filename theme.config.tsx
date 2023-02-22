import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>(╥﹏╥)</span>,
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
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
    text: (
      <span>
        © Joshua Byrd. {new Date().getFullYear()} on{" "}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    ),
  },
  primaryHue: { dark: 202, light: 202 },
  nextThemes: {
    defaultTheme: "dark",
  },
  // banner: {
  //   key: 'so-glad',
  //   text: <span>We are so glad you're here, alive and well...</span>,
  // },
};

export default config;
