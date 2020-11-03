/// <reference types="react" />
import Checkbox from "./Checkbox";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "check-box-with-knobs": {
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
    decorators: ((...args: any) => any)[];
    component: typeof Checkbox;
};
export default _default;
export declare const CheckBoxWithKnobs: () => JSX.Element;
