/// <reference types="react" />
import Template from "./Template";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                primary: {
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
                secondary: {
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
    component: typeof Template;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const Primary: () => JSX.Element;
export declare const Secondary: () => JSX.Element;
