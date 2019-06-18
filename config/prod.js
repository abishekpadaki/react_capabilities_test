const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = function(configDirs) {
  let prodConfig = Object.assign({}, require("./common")(configDirs));
  prodConfig = {
    ...prodConfig,
    optimization: { minimizer: [new UglifyJsPlugin()] }
  };
  return prodConfig;
};
