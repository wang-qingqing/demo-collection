var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
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
          //plugins: ['react-html-attrs'],//添加组件的插件配置（babel-plugin-react-html-attrs）
          presets: ['react', 'es2015']
        }
      },
      //下面是添加的css的loader，也即是css模块化的配置方法(这个配置会改变css的名字变成一个有哈希值的名字)
      // {
      //   test: /\.css$/,
      //   loaders: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]'
      // }

      //下面是使用ant-design的配置文件
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "bundle.js"
  }
};
