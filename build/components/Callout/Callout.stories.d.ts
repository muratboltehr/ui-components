/// <reference types="react" />
import Callout from "./Callout";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "callout-default": {
                    startLoc: {
                        col: number;
                        line: number;
                    };
                    endLoc: {
                        col: number;
                        line: number;
                    };
                    startBody: {
                        col: number;
                        line: number;
                    };
                    endBody: {
                        col: number;
                        line: number;
                    };
                };
                "callout-with-knobs": {
                    startLoc: {
                        col: number;
                        line: number;
                    };
                    endLoc: {
                        col: number;
                        line: number;
                    };
                    startBody: {
                        col: number;
                        line: number;
                    };
                    endBody: {
                        col: number;
                        line: number;
                    };
                };
            };
        };
    };
    title: string;
    component: typeof Callout;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const CalloutDefault: () => JSX.Element;
export declare const CalloutWithKnobs: () => JSX.Element;
