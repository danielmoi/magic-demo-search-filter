const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    app: './client/index.js',
    static: './static/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'js/[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    loaders: [
      // Goes from Right to Left
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  postcssImport({
                    addDependencyTo: webpack,
                  }),
                  precss(),
                  autoprefixer(),
                ],
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer: {
    port: 1234,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    quiet: true,
  },
  devtool: 'source-map',
};
