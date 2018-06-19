/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getPostcssPlugins = require('./postcss_plugins.js');
const helpers = require('./helpers');

const webpackConfig = function (options) {
  const env = options.env;
  const folder = options.folder || '';

  const isProd = env === 'prod' || env === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    entry: {
      polyfills: ['babel-polyfill'],
      app: [helpers.root('src', 'index.jsx')]
    },
    output: {
      path: helpers.root('build'),
      publicPath: isProd ? '' : '/',
      filename: isProd ? 'index.js' : `${folder}[name].js`
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: [
        helpers.root('src'),
        helpers.root('node_modules')
      ]
    },
    module: {
      rules: [
        // scripts
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          },
          include: [
            helpers.root('src')
          ]
        },
        // styles
        {
          test: /\.p?css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: getPostcssPlugins()
              }
            }
          ]
        },
        // images
        {
          test:  /\.(jpg|png|gif)$|(img\.svg)$/,
          use: {
            loader: 'file-loader',
            options: { name: folder + '[name].[ext]' }
          },
          include: [
            helpers.root('src')
          ]
        },
        {
          test: /\.(svg)$/,
          use: {
            loader: 'svg-sprite-loader',
            options: { name: folder + '[name].[ext]' }
          },
          include: [
            helpers.root('src')
          ]
        },
        // fonts
        {
          test: /.(eot)$/,
          use: {
            loader: 'file-loader',
            options: { mimetype: 'application/vnd.ms-fontobject', name: folder + '[name].[ext]' }
          }
        },
        {
          test: /.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader: 'file-loader',
            options: { mimetype: 'application/font-woff', name: folder + '[name].[ext]' }
          }
        },
        {
          test: /.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader: 'file-loader',
            options: { mimetype: 'application/octet-stream', name: folder + '[name].[ext]' }
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader?minimize=false'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(options.env)
      }),
      new HtmlWebpackPlugin({
        inject: 'body',
        template: 'src/stub.html'
      })
    ]
  };
};

module.exports = webpackConfig;
