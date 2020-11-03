/// <reference types="react" />
import RadioButtonGroup from "./RadioButtonGroup";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "with-radio-group-knob": {
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
    actions: {
        argTypesRegex: string;
    };
    decorators: ((...args: any) => any)[];
    component: typeof RadioButtonGroup;
};
export default _default;
export declare const withRadioGroupKnob: () => JSX.Element;
