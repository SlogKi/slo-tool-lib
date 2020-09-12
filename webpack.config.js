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
  module: {
    rules: [
      {
        "test": /\.js$/, 
        use: {
          loader: "babel-loader", 
          options: {
            presets: ["@babel/preset-env"]
          }
        }, 
        exclude: /node_modules/
      }
    ] 
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