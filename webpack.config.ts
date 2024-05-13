import path from 'path';

import dotenv from 'dotenv';

import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode } from './config/build/types/types';

dotenv.config({ path: path.resolve(__dirname, '.env') });

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
