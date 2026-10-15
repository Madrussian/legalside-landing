const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

// PATH_PREFIX задаётся только в превью-сборке на github.io/<репо>/ (Этап 3); на проде не задан = "/".
const pathPrefix = process.env.PATH_PREFIX || "/";

module.exports = function (eleventyConfig) {
  // Переписывает корневые ссылки (href/src="/...") с учётом pathPrefix; внешние URL не трогает
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Статические ассеты копируются как есть
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // CNAME для GitHub Pages (custom domain)
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Год для футера
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix,
  };
};
