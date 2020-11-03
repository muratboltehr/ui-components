/// <reference types="react" />
import Overlay from "../Overlay/Overlay";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "overlay-with-knob": {
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
    component: typeof Overlay;
};
export default _default;
export declare const OverlayWithKnob: () => JSX.Element;
