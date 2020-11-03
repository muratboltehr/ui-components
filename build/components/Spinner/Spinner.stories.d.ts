/// <reference types="react" />
import SpinnerShape from "./Spinner";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "spinner-knobs": {
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
    component: typeof SpinnerShape;
};
export default _default;
export declare const spinnerKnobs: () => JSX.Element;
