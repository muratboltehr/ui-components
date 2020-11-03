/// <reference types="react" />
import { HTMLSelect } from "./HTMLSelect";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "with-knobs": {
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
    Component: typeof HTMLSelect;
};
export default _default;
export declare const WithKnobs: () => JSX.Element;
