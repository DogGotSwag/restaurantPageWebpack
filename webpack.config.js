const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry : './src/index.js',
    plugins : [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            title: 'Didiers Restaurant'
        }),
    ],

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module : {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader' ],
            },
        ],
    }
};