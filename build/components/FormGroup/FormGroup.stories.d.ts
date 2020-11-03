/// <reference types="react" />
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "form-group-with-knobs": {
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
                "form-group-inline": {
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
export declare const FormGroupWithKnobs: () => JSX.Element;
export declare const FormGroupInline: () => JSX.Element;
