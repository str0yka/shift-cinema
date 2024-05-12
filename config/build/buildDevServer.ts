import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/types';

export const buildDevServer = (options: BuildOptions): WebpackDevServerConfiguration => ({
  port: options.port,
  hot: true,
  open: true,
  historyApiFallback: true,
});
