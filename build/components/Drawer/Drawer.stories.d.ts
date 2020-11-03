/// <reference types="react" />
import Drawer from "./Drawer";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "drawer-knobs": {
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
    component: typeof Drawer;
};
export default _default;
export declare const drawerKnobs: () => JSX.Element;
