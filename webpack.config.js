const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: './dist/',
          limit: 10000
        }
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
