declare module "stream-to-array" {
  import * as Promise from 'any-promise';

  function s2a(stream: any, callback?: (error: Error, result: any) => void): Promise<any>
  namespace s2a {}
  export = s2a
}
