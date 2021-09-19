const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "../src/index.jsx"),
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  target: "web",
  devtool: "eval-source-map",
  // 新版本的webpack-cli启动命令是: webpack server
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist")
    },
    // historyApiFallback: true,
    compress: true,
    // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    host: "127.0.0.1",
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.join(__dirname, "../src")
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: path.resolve(__dirname, "../dist/index.html"),
    }),
  ],
};