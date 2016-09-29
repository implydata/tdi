// Type definitions for connect-redis
// Project: https://npmjs.com/package/connect-redis
// Definitions by: Xavier Stouder <https://github.com/xstoudi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// modified by eva

/// <reference type="express" />
/// <reference type="express-session" />

declare module "connect-redis" {
    import * as express from "express";
    import * as session from "express-session";

    function s(options: (options?: session.SessionOptions) => express.RequestHandler): s.RedisStore;

    namespace s {
        interface RedisStore extends session.Store {
            new (options: RedisStoreOptions): session.Store;
        }
        interface RedisStoreOptions {
            client?: any;
            host?: string;
            port?: number;
            socket?: string;
            url?: string;
            ttl?: number;
            disableTTL?: boolean;
            db?: number;
            pass?: string;
            prefix?: string;
            unref?: boolean;
            serializer?: Serializer | JSON;
        }
        interface Serializer {
            stringify: Function;
            parse: Function;
        }
    }

    export = s;
}