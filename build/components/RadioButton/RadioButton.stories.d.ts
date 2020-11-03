/// <reference types="react" />
import RadioButton from "./RadioButton";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "with-radio-knob": {
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
    component: typeof RadioButton;
};
export default _default;
export declare const withRadioKnob: () => JSX.Element;
