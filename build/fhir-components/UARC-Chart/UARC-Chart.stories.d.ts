/// <reference types="react" />
import UARCChart from "./UARC-Chart";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                chart: {
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
    component: typeof UARCChart;
};
export default _default;
export declare const Chart: () => JSX.Element;
