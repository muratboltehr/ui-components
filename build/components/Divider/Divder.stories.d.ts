/// <reference types="react" />
import Divider from "./Divider";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "divider-with-knobs": {
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
    component: typeof Divider;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const DividerWithKnobs: () => JSX.Element;
