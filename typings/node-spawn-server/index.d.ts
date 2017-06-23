export interface SpawnServerOptions {
  verbose?: boolean;
  env?: any;
}

export function spawnServer(cmd: string, options?: SpawnServerOptions): {
  getStderr: () => string;
  getStdout: () => string;
  getStdall: () => string;
  onHook: (hook: string, callback: Function) => void;
  kill: () => void;
};
