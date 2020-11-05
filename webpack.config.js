const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    historyApiFallback: true
};
module.exports = (mode) => {
  return {
    entry: './src/index.tsx',
    devtool: mode === 'production' ? 'source-map' : 'eval-source-map',
    devServer: mode !== 'production' ? devServer : {},
    output: {
      filename: mode === 'production' ? '[name].js': '[name].bundle.js' ,
      path: path.resolve(__dirname, 'dist'),
      publicPath: './',
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          use: {
            loader: 'ts-loader',
          }
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
            },
            'sass-loader'
          ]
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: 'Development',
      }),
    ],
  }
};
