"use strict";
const path = require("path"),
  CopyPlugin = require('copy-webpack-plugin');
let webpackConf = {
  mode: 'production',
  entry: "./src/sloToolLib.js",
  output: {
    path: path.resolve("./lib"),
    filename: "sloToolLib.min.js",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'LICENSE', to: path.resolve('./lib') }
      ],
    })
  ]
};

module.exports = webpackConf;