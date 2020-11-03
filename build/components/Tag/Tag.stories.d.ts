/// <reference types="react" />
import Tag from "./Tag";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "with-tag-knob": {
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
    component: typeof Tag;
};
export default _default;
export declare const withTagKnob: () => JSX.Element;
