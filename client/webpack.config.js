module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "Hammer": "hammerjs/hammer",
        createDayLabel: "jquery",
        createWeekdayLabel: "jquery",
        activateOption: "jquery",
        leftPosition: "jquery"
    })
  ]
}
