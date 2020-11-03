import React, { Component } from "react";
import { TagProps } from "./Tag.types";
import "./Tag.scss";
export declare class Tag extends Component<TagProps> {
    inputRef: React.RefObject<HTMLDivElement>;
    fill: any;
    intent: any;
    interactive: any;
    large: any;
    minimal: any;
    round: any;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Tag;
