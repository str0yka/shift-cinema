import path from 'path';

import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/types';

export const buildPlugins = (options: BuildOptions): webpack.Configuration['plugins'] => {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  const plugins: webpack.Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: path.resolve(options.paths.public, 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(options.paths.public, 'images'),
          to: path.resolve(options.paths.output, 'images'),
        },
      ],
    }),
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
        chunkFilename: isDev ? 'css/[id].css' : 'css/[id].[contenthash:8].css',
      }),
    );
  }

  return plugins;
};
