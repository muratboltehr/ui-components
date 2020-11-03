/// <reference types="react" />
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "toast-with-knobs": {
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
    component: {
        (props: any): JSX.Element;
        propTypes: {
            toastList: import("prop-types").Validator<any[]>;
            position: import("prop-types").Requireable<string>;
            autoDelete: import("prop-types").Requireable<boolean>;
            dismissTime: import("prop-types").Requireable<number>;
        };
    };
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const ToastWithKnobs: () => JSX.Element;
