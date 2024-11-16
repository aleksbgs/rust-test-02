const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  experiments: {
    asyncWebAssembly: true,
  },
  entry: "./index.js",
  output: {
    publicPath: '/public/',
    filename: "index.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{from:"./index.html",to:"./"}]
    })
  ],
};
