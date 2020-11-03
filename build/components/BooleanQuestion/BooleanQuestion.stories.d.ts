import React from "react";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "with-bar": {
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
    component: React.FC<import("./BooleanQuestion.types").BooleanQuestionProps>;
};
export default _default;
export declare const WithBar: () => JSX.Element;
