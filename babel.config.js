/**
 * babel@7 wont use ur local .babelrc config to transpile files inside node_modules.
 * It will use babel.config.js however.
 * See: https://github.com/rollup/rollup-plugin-babel/issues/232
 */

module.exports = {
    presets: [
        "@babel/preset-react",
        [
            "@babel/preset-env",
            {
                "targets": {
                    "browsers": ["ie >= 10", "Firefox >= 60", "Chrome >= 41"]
                    // Firefox ESR 60 is supported until October 2019
                    // for the moment we need Chrome 41, so that it is crawlable by the googlebot web rendering service, see
                    // https://developers.google.com/search/docs/guides/rendering
                    // https://www.elephate.com/blog/google-improve-web-rendering-service/
                }
            }
        ]
    ],
    plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-arrow-functions",
    ],
};
