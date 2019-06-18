const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = configDirs => {
  let prodConfig = Object.assign({}, require("./common")(configDirs));
  prodConfig = {
    ...prodConfig,
    module: {
      ...prodConfig.module,
      rules: [
        ...prodConfig.module.rules,
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({ parallel: true }),
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin({
          cssProcessorPluginOptions: {
            preset: ["default", { discardComments: { removeAll: true } }]
          }
        })
      ],
      splitChunks: { chunks: "all" }
      // runtimeChunk: true
    }
  };
  return prodConfig;
};
