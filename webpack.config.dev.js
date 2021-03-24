const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const basePath = __dirname;
const distPath = 'dist';
const indexInput = './public/index.html';
const indexOutput = './index.html'


module.exports = {
  mode: 'development',
  resolve: {
    extensions:['.js']
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(basePath, distPath),
    filename: '[name][contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
    clean: true,
  },
  module:{
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
           loader: 'babel-loader'
          }
       ]
      },
      {
        test:/\.html$/,
        exclude: /node_modules/,
        use:{
          loader: 'html-loader'
        }
      },
      {
        test: /\.css|.styl$/i,
        exclude: /node_module/,
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[name].[contenthash].[ext]',
              outputPath: './assets/fonts/',
              puclicPath: "../assets/fonts/",
              esModule: false,
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: indexOutput,
      template: indexInput,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    compress: true,
    port: 3006,
  }
}