import React from "react";
import { ResizeSensorProps } from "./ResizeSensor.types";
import ResizeObserver from "resize-observer-polyfill";
import "./ResizeSensor.scss";
import { AbstractPureComponent2 } from "../../common";
export declare class ResizeSensor extends AbstractPureComponent2<ResizeSensorProps> {
    element: Element | null;
    observer: ResizeObserver;
    render(): string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)> | React.ReactPortal;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ResizeSensorProps): void;
    componentWillUnmount(): void;
    observeElement(force?: boolean): void;
    getElement(): Element | Text;
}
export default ResizeSensor;
