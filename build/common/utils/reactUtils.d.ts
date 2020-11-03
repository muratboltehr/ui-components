import React from "react";
export declare function isReactNodeEmpty(node?: React.ReactNode, skipArray?: boolean): boolean;
export declare function isReactElement<T = any>(child: React.ReactNode): child is React.ReactElement<T>;
export declare namespace isReactElement {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
}
export declare function ensureElement(child: React.ReactNode | undefined, tagName?: keyof JSX.IntrinsicElements): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
export declare function isElementOfType<P = {}>(element: any, ComponentType: React.ComponentType<P>): element is React.ReactElement<P>;
