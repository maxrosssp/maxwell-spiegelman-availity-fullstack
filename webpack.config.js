var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    historyApiFallback: true,
    static: path.join(__dirname, '.'),
    https: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        use: { 
            loader: 'babel-loader',
            options: {
                presets: ['@babel/react', '@babel/preset-env']
            }
        }
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
          test: /\.(png|pdf)$/,
          use: ['file-loader']
      }
    ]
  },
  resolve: {
      extensions: ['.js', '.jsx']
  }
};