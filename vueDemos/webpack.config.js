const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'ssss.js',
    path: path.resolve(__dirname,'./dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["vue-style-loader","css-loader","less-loader"]
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ["vue-style-loader","css-loader","sass-loader"]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ["vue-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin ({
      template: './src/temp.html'
    })
  ],
  devServer: {
    port: 8080
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}