/// <reference types="react" />
import Alert from "./Collapse";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "collapse-example": {
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
    component: typeof Alert;
};
export default _default;
export declare const collapseExample: () => JSX.Element;
