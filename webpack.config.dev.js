const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: '/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_module/,
        use:{
          loader: 'babel-loader',
        }
      },
      {
        test:/\.html$/,
        use:{
          loader: 'html-loader'
        }
      },
      {
        test: /\.css|styl$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name][contenthash].css'
    }),
    new Dotenv(),
  ],
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    compress: true,
    port: 3006,
  }
}