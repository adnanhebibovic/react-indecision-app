const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public/src'),
        filename: 'bundle.js'
      },
    mode: 'development',
    module: {
      rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react']
            }
          }
        }, {
          test: /\.s?css$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        }]
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      publicPath: '/src',
      historyApiFallback: true,
      hot: true
    }
}