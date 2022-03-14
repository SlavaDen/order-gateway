const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("production"),
      "process.env.apiUrl": JSON.stringify("http://localhost:5001"),
    }),
  ],
};
