import React from "react";
import { TextProps } from "./Text.types";
import { AbstractPureComponent2 } from '../../common';
import "./Text.scss";
export declare class Text extends AbstractPureComponent2<TextProps> {
    private textReference;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): React.ReactElement<{
        className: string;
        ref: (ref: HTMLElement | null) => HTMLElement;
        title: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    private updateState;
}
export default Text;
