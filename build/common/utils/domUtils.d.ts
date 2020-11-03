/// <reference types="react" />
export declare function elementIsOrContains(element: HTMLElement, testElement: HTMLElement): boolean;
/**
 * Throttle an event on an EventTarget by wrapping it in a
 * `requestAnimationFrame` call. Returns the event handler that was bound to
 * given eventName so you can clean up after yourself.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 */
export declare function throttleEvent(target: EventTarget, eventName: string, newEventName: string): (event: Event) => void;
export declare namespace throttleEvent {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
}
export interface IThrottledReactEventOptions {
    preventDefault?: boolean;
}
/**
 * Throttle a callback by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 * @see https://www.html5rocks.com/en/tutorials/speed/animations/
 */
export declare function throttleReactEventCallback(callback: (event: React.SyntheticEvent<any>, ...otherArgs: any[]) => any, options?: IThrottledReactEventOptions): (event2: React.SyntheticEvent<any>) => void;
export declare namespace throttleReactEventCallback {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
}
/**
 * Throttle a method by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 */
export declare function throttle<T extends Function>(method: T): T;
export declare namespace throttle {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            apply: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            call: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            bind: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            toString: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            prototype: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            length: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            arguments: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            caller: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            name: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            "__@hasInstance": {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
}
