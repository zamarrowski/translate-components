'use strict'

let webpack = require('webpack')

let config = {
  entry: './src/index.js',
  output: {
    path: 'lib/',
    filename: 'react-translate.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
