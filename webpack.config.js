const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry : './src/index.js',
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