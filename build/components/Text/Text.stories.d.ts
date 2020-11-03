/// <reference types="react" />
import Text from "./Text";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "text-with-knobs": {
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
    component: typeof Text;
};
export default _default;
export declare const TextWithKnobs: () => JSX.Element;
