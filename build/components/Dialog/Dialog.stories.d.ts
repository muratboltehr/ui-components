/// <reference types="react" />
import Dialog from "./Dialog";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "dialog-with-knobs": {
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
    component: typeof Dialog;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const DialogWithKnobs: () => JSX.Element;
