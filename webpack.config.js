const path = require('path');

module.exports = {
  entry: './client/index.js', // path to the file we want;
  output: {
    path: (path.join(__dirname, './build')),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,

  module: {
    rules: [
      { 
        test:/\.jsx?/,  
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {
              loader: 'sass-loader',
            },
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  devServer: {
    publicPath: '/build/',
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000/',
    }
  }

};