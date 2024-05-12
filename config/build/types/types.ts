export type BuildMode = 'production' | 'development';

export type BuildPaths = {
  entry: string;
  output: string;
  public: string;
  alias: Record<string, string>;
};

export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
};
