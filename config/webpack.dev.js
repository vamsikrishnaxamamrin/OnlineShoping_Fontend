const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, '../public', 'index.js'),
  mode: 'development',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],
};
