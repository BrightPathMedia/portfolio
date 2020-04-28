// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const i18nConfig = require("./src/i18n/i18n.json");

module.exports = function(api) {
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  });

  api.createManagedPages(async ({ createRoute }) => {
    const workItemRoute = createRoute({
      path: `/work/:slug`,
      component: "./src/pages/work/Entry.vue",
    });

    Object.values(i18nConfig.en.work.workItems).forEach((item) => {
      workItemRoute.addPage({
        path: item.url,
        context: item,
      });
    });
  });
};
