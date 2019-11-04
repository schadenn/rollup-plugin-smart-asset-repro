import rollupBabel from "rollup-plugin-babel";
import pkg from "./package.json";
import progress from "rollup-plugin-progress";
import path from "path";
import smartAsset from "rollup-plugin-smart-asset";

module.exports = [
  {
    preserveModules: true,
    input: path.resolve(`${__dirname}/src/index.js`),
    plugins: [
      smartAsset({
        url: "copy",
        assetsPath: "../public/componentImages",
        keepImport: true
      }),
      rollupBabel({
        babelrc: false,
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
        presets: ["@babel/preset-react"]
      })
    ],
    output: [
      {
        dir: path.dirname(pkg.es2017),
        format: "esm"
      }
    ]
  },
  {
    preserveModules: true,
    input: path.resolve(`${__dirname}/dist/esm/index.js`),
    plugins: [
      progress(),
      rollupBabel({ extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"] })
    ],
    output: [
      {
        dir: path.dirname(pkg.main),
        format: "cjs"
      },
      {
        dir: path.dirname(pkg.module),
        format: "esm"
      }
    ]
  }
];
