import webpack from 'webpack';

import { BuildOptions } from './types/types';

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  alias: options.paths.alias,
});
