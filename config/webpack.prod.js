/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const webpackMerge = require('webpack-merge');
const helpers = require('./helpers');

const ENV = 'production';

const getConfig = require('./webpack.common.js');
// uncomment if you want to see configs merge result
// const helpers = require('./helpers');

const ASSETS_PATH = './assets/';

const commonConfig = getConfig({
    env: ENV,
    folder: ASSETS_PATH
});

const config = webpackMerge.smart(commonConfig, {
    module: {
        rules: [
            {
                test: /\.p?css$/,
                use: 
                    [
                        {
                            loader: 'css-loader',
                            options: { minimize: true }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: ASSETS_PATH + '[name].[ext]' }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: { name: ASSETS_PATH + '[name].[ext]' }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            svgo: {
                                plugins: [
                                    { removeViewBox: false },
                                    { removeEmptyAttrs: false }
                                ]
                            }
                        }
                    }
                ],
                include: [
                    helpers.root('src')
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            beautify: false,
            sourceMap: false,
            warnings: false
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            inject: 'body',
            template: 'src/stub.html',
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
});

// uncomment if you want to see configs merge result
// helpers.writeJSON(config);

module.exports = config;
