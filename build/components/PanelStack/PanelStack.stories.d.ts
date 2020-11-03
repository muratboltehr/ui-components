/// <reference types="react" />
import PanelStack from "./PanelStack";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "panel-stack": {
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
    component: typeof PanelStack;
};
/********************** */
/****************************** */
export default _default;
export declare const panelStack: () => JSX.Element;
