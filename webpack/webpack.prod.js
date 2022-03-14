const webpack = require("webpack");
var config = require("../config/config.json");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(config),
    }),
  ],
};
