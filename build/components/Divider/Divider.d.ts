import React, { Component } from "react";
import "./Divider.scss";
import { DividerProps } from "./Divider.types";
declare class Divider extends Component<DividerProps> {
    inputRef: React.RefObject<HTMLDivElement>;
    constructor(props: DividerProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export default Divider;
