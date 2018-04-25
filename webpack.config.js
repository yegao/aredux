const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
    // hot:false
  },
  entry: {
    index: ['./src/index.js'],
    vendors: ['react','react-dom','redux']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: path.resolve(__dirname, 'node_modules')
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader','postcss-loader'],
        exclude: path.resolve(__dirname, 'node_modules')
      }, {
        test: /\.(jpg|png|jpeg|svg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[sha512:hash:base64:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*','.js','.jsx','.json']//一定要加上'*'原因:https://webpack.js.org/configuration/resolve/#resolve-extensions
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: "vendors",
      cacheGroups: {
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true
        // },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    },
    // runtimeChunk:true
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {exclude: 'node_modules'}),
    new HtmlWebpackPlugin({title: 'family.ink', template: 'src/index.html', inject: 'body',chunks:['index','vendors']}),
    new webpack.HotModuleReplacementPlugin()
  ]
}
