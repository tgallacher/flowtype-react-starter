const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /\/node_modules\//,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /\/node_modules\//,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
