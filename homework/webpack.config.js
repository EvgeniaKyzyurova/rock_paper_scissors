const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HTMLWebpackPlagin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
   entry: './js/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      },
      {
         test: /\.m?js$/,
         exclude: /node_modules/,
         use: {
           loader: "babel-loader",
           options: {
             presets: ['@babel/preset-env']
           }
         }
       }],
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
      new HTMLWebpackPlagin({
        template: './index.html',
      }),
      new ESLintPlugin(),
   ]
};
