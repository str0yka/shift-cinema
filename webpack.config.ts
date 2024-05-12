import path from 'path';

import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode } from './config/build/types/types';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
}

export default (env: EnvVariables) =>
  buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'dist'),
      public: path.resolve(__dirname, 'public'),
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  });
