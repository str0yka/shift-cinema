import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/types';

export const buildLoaders = (options: BuildOptions): webpack.ModuleOptions['rules'] => {
  const isDev = options.mode === 'development';

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            namedExport: false,
          },
        },
      },
    ],
  };

  return [tsLoader, cssLoader];
};
