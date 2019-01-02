const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sassRegex = /\.(scss|sass|css)$/;
const jsxRegex = /\.(js|jsx)$/;
require('dotenv').config();


module.exports = (env, argv) => ({
  
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  watch: true,
  devtool: argv.mode == 'development' ? 'source-map' : false,
  performance: { hints: false },
  devServer: {
    historyApiFallback: true,
    host: process.env.DEV_SERVER_HOST || 'localhost',
    port: process.env.DEV_SERVER_PORT || 5000
  },
  module: {
    rules: [
      {
        test: jsxRegex,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
      },
      {
        test: sassRegex,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
});

