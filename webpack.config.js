const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sassRegex = /\.(scss|sass|css)$/;
const jsxRegex = /\.(js|jsx)$/;
const imgRegex = /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/;
require('dotenv').config();


module.exports = (env, argv) => ({

    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    watch: false,
    devtool: argv.mode === 'development' ? 'source-map' : false,
    performance: {hints: false},
    devServer: {
        historyApiFallback: true,
        host: process.env.DEV_SERVER_HOST || 'localhost',
        port: process.env.DEV_SERVER_PORT || 7000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization, Ocp-Apim-Subscription-Key",
          },
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
            {
                test: imgRegex,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
});

