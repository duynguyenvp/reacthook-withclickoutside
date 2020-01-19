const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ["@babel/polyfill", path.resolve(__dirname, 'src/withClickOutside')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'withClickOutside.js',
        library: 'withClickOutside'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
};