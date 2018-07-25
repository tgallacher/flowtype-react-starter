const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
