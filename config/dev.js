const webpack = require("webpack");

module.exports = configDirs => {
  let devConfig = Object.assign({}, require("./common")(configDirs));
  return devConfig;
};
