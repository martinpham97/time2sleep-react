const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  watch: true,

  target: 'electron-renderer',

  entry: './app/src/app.js',

  output: {
    path: `${__dirname}/app/build`,
    publicPath: 'build/',
    filename: 'bundle.js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
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
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: '[name].css',
    }),
  ],

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

};
