/// <reference types="react" />
import NavBar from "./NavBar";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "nav-bar-knobs": {
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
    component: typeof NavBar;
};
export default _default;
export declare const navBarKnobs: () => JSX.Element;
