var path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "src/withClickOutside.js"),
    test: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  externals: {
    react: "react"
  }
};