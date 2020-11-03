/// <reference types="react" />
import ProgressBar from "./ProgressBar";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "progress-bar-with-knobs": {
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
    component: typeof ProgressBar;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const ProgressBarWithKnobs: () => JSX.Element;
