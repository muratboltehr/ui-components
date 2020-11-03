import { Component } from "react";
import { AlertProps } from "./Alert.types";
import "./Alert.scss";
export declare class Alert extends Component<AlertProps> {
    constructor(props: any);
    componentDidUpdate(): void;
    handleCancel(): void;
    handleConfirm(): void;
    protected validateProps(props: any): void;
    render(): JSX.Element;
}
export default Alert;
