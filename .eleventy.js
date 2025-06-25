// Eleventy Settings

const sass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
    // copy assets and style folder
    eleventyConfig.addPassthroughCopy("assets");

    // compile sass
    eleventyConfig.addPlugin(sass, {
        watch: ['styles/*.scss', '!node_modules/**'],
        autoprefixer: true,
        cleanCSS: false
    });

    // sort levels by index number
    // creates 'levels' collection
    eleventyConfig.addCollection('levels', function(collectionApi) {
        return collectionApi.getFilteredByTag('level').sort(
            (a, b) => a.data.index - b.data.index
        );
    });
    // sort levels by index number
    // creates 'levels-en' collection
    eleventyConfig.addCollection('levels_en', function(collectionApi) {
        return collectionApi.getFilteredByTag('level-en').sort(
            (a, b) => a.data.index - b.data.index
        );
    });

    return {
        dir: {
            input: "src",
            includes: "/_includes",
            layouts: "/_includes/_layouts",
            output: "_site",

            passthroughFileCopy: true
        }
    }
};