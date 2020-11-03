/// <reference types="react" />
import A1CChart from "./A1C-Chart";
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
    component: typeof A1CChart;
};
export default _default;
export declare const Chart: () => JSX.Element;
