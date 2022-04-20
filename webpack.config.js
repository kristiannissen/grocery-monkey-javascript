const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: "development",
    entry: {
      index: "./src/index.js",
      "service-worker": "./src/service-worker.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "./public"),
      clean: true,
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        showErrors: true,
        template: "./src/template.html",
      }),
    ],
    devtool: "inline-source-map",
    devServer: {
      static: {
        directory: path.resolve(__dirname, "./public"),
      },
      port: env.port,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
  };
};
