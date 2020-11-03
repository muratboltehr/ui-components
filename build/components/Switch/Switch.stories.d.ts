/// <reference types="react" />
import Switch from "./Switch";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "switch-example": {
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
    component: typeof Switch;
};
export default _default;
export declare const SwitchExample: () => JSX.Element;
