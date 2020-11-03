import { IButtonState, IButtonProps } from "./Button.types";
import { AbstractPureComponent2, IRefObject } from "../../common";
import React, { HTMLAttributes } from "react";
import "./Button.scss";
export declare abstract class AbstractButton<H extends HTMLAttributes<HTMLElement>> extends AbstractPureComponent2<IButtonProps & H, IButtonState> {
    state: {
        isActive: boolean;
    };
    protected abstract buttonRef: HTMLElement | IRefObject<HTMLElement>;
    private currentKeyDown;
    abstract render(): JSX.Element;
    protected getCommonButtonProps(): {
        className: string;
        disabled: (IButtonProps & H)["loading"] | (IButtonProps & H)["disabled"];
        onClick: (IButtonProps & H)["onClick"];
    };
    protected handleKeyDown: (e: React.KeyboardEvent<any>) => void;
    protected handleKeyUp: (e: React.KeyboardEvent<any>) => void;
    protected renderChildren(): React.ReactNode;
}
