import { ButtonHTMLAttributes } from "react";
import { AbstractButton } from "./AbstractButton";
import { IRefObject } from "../../common";
export declare class Button extends AbstractButton<ButtonHTMLAttributes<HTMLButtonElement>> {
    static displayName: string;
    protected buttonRef: HTMLButtonElement | IRefObject<HTMLButtonElement>;
    protected handleRef: IRefObject<HTMLButtonElement> | ((ref: HTMLButtonElement) => void);
    render(): JSX.Element;
}
export default Button;
