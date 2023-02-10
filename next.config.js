const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const withoutImages = {
  ...withNextra(),
  ...{
    images: {
      unoptimized: true,
    },
  },
};

module.exports = withoutImages;
