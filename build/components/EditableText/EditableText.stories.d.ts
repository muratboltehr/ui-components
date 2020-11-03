/// <reference types="react" />
import EditableText from "./EditableText";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "editable-text-with-knobs": {
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
    component: typeof EditableText;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const EditableTextWithKnobs: () => JSX.Element;
