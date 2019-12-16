// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/styles/globals.scss")]
    });
}

module.exports = {
  siteName: "BrightPath",
  siteUrl: "https://brightpath.media",
  siteDescription: "SEO <meta> description goes here",
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.(pug|vue)$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader");
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "tailwind.config.js",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
    }
  ],

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });

    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        inline: {
          keyword: "svg-inline",
          strict: true
        }
      });
  }
};
