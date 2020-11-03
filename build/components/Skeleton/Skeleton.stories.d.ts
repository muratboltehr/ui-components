/// <reference types="react" />
import "./Skeleton.scss";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "skeleton-with-knobs": {
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
export declare const SkeletonWithKnobs: () => JSX.Element;
