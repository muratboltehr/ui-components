/// <reference types="react" />
import BMIChart from "./Chart";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "bmi-chart": {
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
    component: typeof BMIChart;
};
export default _default;
export declare const BmiChart: () => JSX.Element;
