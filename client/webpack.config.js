module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  }
  {
      module: {
          loaders: [
              { test: /\.jade$/, loader: "jade" },
              // => "jade" loader is used for ".jade" files

              { test: /\.css$/, loader: "style!css" },
              // => "style" and "css" loader is used for ".css" files
              // Alternative syntax:
              { test: /\.css$/, loaders: ["style", "css"] },
          ]
      }
  }
}
