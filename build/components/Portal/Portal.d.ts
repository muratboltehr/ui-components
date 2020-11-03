import React from "react";
import { PortalProps, PortalState } from "./Portal.types";
import "./Portal.scss";
export declare function isFunction(value: any): boolean;
export declare namespace isFunction {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
}
export declare class Portal extends React.Component<PortalProps, PortalState> {
    static defaultProps: PortalProps;
    state: PortalState;
    private portalElement;
    render(): React.ReactPortal;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PortalProps): void;
    componentWillUnmount(): void;
    private createContainerElement;
    private unstableRenderNoPortal;
}
export default Portal;
