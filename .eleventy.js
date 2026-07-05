module.exports = function (eleventyConfig) {
  // Статические ассеты копируются как есть
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

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
  };
};
