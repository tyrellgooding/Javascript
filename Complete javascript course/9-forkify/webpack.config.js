const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist/js/bundle.js'
    },
    devtool: 'source-map',

    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({

            filename: 'index.html',
            template: './src/index.html'

        })
    ],

    module: {
        rules: [{
            //looks for all js files. If so babel loader will be applied.(complier)
            test: /\.js$/,
            //excluse this folder.
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};