const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index',

  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@img': path.resolve(__dirname, 'src/assets/img/'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(PNG|svg)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 output에서 만들어진 bundle.js를 적용하여, public에 새로운 html 파일 생성
      template: `./dist/index.html`,
      favicon: './dist/favicon.ico',
    }),
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
