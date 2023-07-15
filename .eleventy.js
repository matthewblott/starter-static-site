module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src");

  eleventyConfig.addPassthroughCopy({
    "./node_modules/@picocss/pico/css/pico.min.css": "css/pico.min.css",
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "www",
    },
  };
};
