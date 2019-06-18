const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildConfig = configDirs => {
  return {
    entry: "./src/index.js",
    // mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: configDirs.BUILD_DIR,
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: configDirs.APP_DIR,
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      watchContentBase: true,
      compress: true,
      hotOnly: true,
      historyApiFallback: true,
      open: true
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.HotModuleReplacementPlugin()]
  };
};

module.exports = buildConfig;
