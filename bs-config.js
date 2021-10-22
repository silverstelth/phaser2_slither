
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    ui: false,
    proxy: "localhost:8000",
    files: ["**/*.css", "**/*.ejs", "**/*.js"],
    ignore: ["node_modules"],
    reloadDelay: 10,
    notify: false,
    port: 3000,
};