import { Callback } from "./types";
export interface Disposable {
    dispose(): void;
}
export interface Event<T> {
    (listener: Callback<T>): Disposable;
}
/**
 * Emitter typecasts for a single event type.
 */
export declare class Emitter<T> {
    private listeners;
    get event(): Event<T>;
    /**
     * Emit an event with a value.
     */
    emit(value: T): void;
    dispose(): void;
}
