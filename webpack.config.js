const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'dist', 'browser', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'static', 'js'),
    filename: 'bundle.js'
  },
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
   module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
            presets: ['react', 'es2015', 'stage-2'],
            plugins: ['transform-object-rest-spread']
        },
      }
    ]
  }
}
