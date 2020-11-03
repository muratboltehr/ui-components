/// <reference types="react" />
import { DialogProps } from "./Dialog.types";
import { AbstractPureComponent2 } from "../../common";
import "./Dialog.scss";
export declare class Dialog extends AbstractPureComponent2<DialogProps> {
    static defaultProps: DialogProps;
    private showHeader;
    private renderCloseButton;
    render(): JSX.Element;
}
export default Dialog;
