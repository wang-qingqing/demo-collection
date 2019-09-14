var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer:{
    historyApiFallback: true  //可以查看页面的报错信息
  },
  context: path.join(__dirname) + '/src',
  entry: "./js/root.js",
  devtool: debug? "inline-sourcemap" : null,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "bundle.js"
  }
};
