const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader','less-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom'
    }),
    new htmlWebpackPlugin({
      template: './src/temp.html'
    })
  ],
  devServer: {
    port: 8080
  }
}