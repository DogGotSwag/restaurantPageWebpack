const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry : './src/index.js',
    devtool: 'inline-source-map',
    plugins : [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
    ],

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};