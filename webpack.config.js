const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build/public'),
    filename: '[name]_[hash].js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new WebpackAssetsManifest({
      output: '../client-manifest.json',
      publicPath: true
    })
  ]
};