const { VueLoaderPlugin } = require('vue-loader');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public' }
            ]
        }),
        new VueLoaderPlugin(),
        new Dotenv()
    ],
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"],
    }
};