/// <reference types="react" />
import Button from "./Button";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "with-button-knob": {
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
    component: typeof Button;
};
export default _default;
/**
 * Active button with primary intent
 */
export declare const withButtonKnob: {
    (): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
};
