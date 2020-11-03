/// <reference types="react" />
import FileInput from "./FileInput";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "file-input-with-knobs": {
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
    component: typeof FileInput;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const FileInputWithKnobs: () => JSX.Element;
