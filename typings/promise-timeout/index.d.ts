export function timeout<T>(promise: Promise<T>, timeoutMillis: number): Promise<T>;
export declare class TimeoutError extends Error {
}
