/// <reference types="react" />
import NumericInput from "./NumericInput";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "numeric-input-knob": {
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
    component: typeof NumericInput;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const NumericInputKnob: () => JSX.Element;
