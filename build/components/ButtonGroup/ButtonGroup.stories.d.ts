/// <reference types="react" />
import ButtonGroup from "./ButtonGroup";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "button-group-knob": {
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
    component: typeof ButtonGroup;
};
export default _default;
export declare const ButtonGroupKnob: () => JSX.Element;
