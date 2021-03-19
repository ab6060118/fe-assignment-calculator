const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_env, options) => ({
  mode: 'development',
  devtool: options.mode === 'development' ? 'source-map' : false,
  target: 'web',
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[hash].js',
    environment: {
      arrowFunction: false,
      const: false,
    },
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/i,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({
      filename: '[fullhash].css',
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: './',
    overlay: true,
    watchContentBase: true,
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    inline: true,
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    // publicPath: '/qulog/',
    // proxy: {
    // '/': 'http://172.17.20.65:8080',
    // },
  },
});
