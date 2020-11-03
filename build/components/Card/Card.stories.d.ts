/// <reference types="react" />
import Card from "./Card";
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "card-with-knobs": {
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
    component: typeof Card;
};
export default _default;
/**
 * A card with knobs
 */
export declare const cardWithKnobs: {
    (): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
};
