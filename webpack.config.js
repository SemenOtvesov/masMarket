
const path = require('node:path')
const webpack = require('webpack')
const HTMLPlug = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssEXtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

function optimization(){
    const obj = { splitChunks: {
        chunks: 'all'
    }}
    if(!isDev){
        obj.minimizer = [
        new CssMinimizerWebpackPlugin(),
        new TerserWebpackPlugin()
        ]
    }

    return obj
}

function createLoader(load){
    if(load){return [{loader: MiniCssEXtractPlugin.loader},'css-loader', load]}
    else{return [{loader: MiniCssEXtractPlugin.loader},'css-loader']}
}

function jsLoaders(){
    const loaders = [{
        loader: 'babel-loader',
        options: {presets: ['@babel/preset-env']},
    }]
    return loaders
}

module.exports = {
    resolve: {
        alias: {
            '@js': path.resolve(__dirname, 'maket/js'),
            '@maket': path.resolve(__dirname, 'maket'),
            '@core': path.resolve(__dirname, 'maket/js/core'),
            '@components': path.resolve(__dirname, 'maket/js/components'),
            '@elementUI': path.resolve(__dirname, 'maket/js/components/elementUI'),
            '@midleComponents': path.resolve(__dirname, 'maket/js/components/midleComponents'),
            '@mains': path.resolve(__dirname, 'maket/js/components/mains'),
            process: "process/browser"
        }
    },
    entry:'@js/script.js',
    output:{
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'docs')
    },
    devtool: isDev ? 'source-map' : false,
    devServer:{
        port: 3000,
        hot: isDev,
        historyApiFallback: true
    },
    plugins:[
        new HTMLPlug({template:'./maket/index.html',  minify: {collapseWhitespace: !isDev}}),
        new CleanWebpackPlugin(),
        new MiniCssEXtractPlugin(),
        new CopyPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'maket/img'), to: path.resolve(__dirname, 'public/img'), noErrorOnMissing: true}
            ]
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:  createLoader(),
                type: 'javascript/auto'
            },
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
            ]
    },
    optimization: optimization(),
}