const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    screw_ie8: true,
    conditionals: true,
    unused: true,
    comparisons: true,
    sequences: true,
    dead_code: true,
    evaluate: true,
    if_return: true,
    join_vars: true,
  },
  output: {
    comments: false,
  },
});

const base = {
  devServer: {
    historyApiFallback: true,
  },
  entry: {
    index: './src/client/index.html',
    bundle: './src/client/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './public'),
    publicPath: '/',
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/client/index.html`,
      filename: 'index.html',
      inject: 'true',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, './src/client/components/'),
      containers: path.resolve(__dirname, './src/client/containers/'),
      store: path.resolve(__dirname, './src/client/store/'),
      reducers: path.resolve(__dirname, './src/client/reducers/'),
      constants: path.resolve(__dirname, './src/client/constants/'),
      actions: path.resolve(__dirname, './src/client/actions/'),
      assets: path.resolve(__dirname, './src/client/assets/'),
      utils: path.resolve(__dirname, './src/client/utils/'),
      services: path.resolve(__dirname, './src/client/services/'),
      config: path.resolve(__dirname, './src/client/config/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg)$/,
        loader: 'file-loader?name=./assets/[name].[ext]',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.json$/,
        loader: 'file-loader?name=./config/[name].[ext]',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: false },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: false },
            },
          ],
        }),
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        options: {
          minimize: false,
          attrs: ['img:src', 'link:href'],
        },
      },
    ],
  },
};


if (nodeEnv === 'production') {
  base.plugins.push(uglifyPlugin);
} else {
  base.devtool = 'cheap-module-eval-source-map';
}


module.exports = base;
