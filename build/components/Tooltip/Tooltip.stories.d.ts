/// <reference types="react" />
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "tooltip-knob": {
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
};
export default _default;
export declare const TooltipKnob: () => JSX.Element;
