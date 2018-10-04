const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  watch: true,

  target: 'electron-renderer',

  entry: './app/src/app.js',

  output: {
    path: `${__dirname}/app/build`,
    publicPath: 'build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }),
      },
      {
        test: [/\.scss$/],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader?sourceMap',
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: 'img/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            publicPath: './',
          },
        },
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true,
    }),
  ],

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

};
