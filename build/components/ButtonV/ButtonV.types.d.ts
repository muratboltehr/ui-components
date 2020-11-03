/// <reference types="react" />
import { Alignment, IRef, Intent, Size } from "../../common";
export interface ButtonVProps {
    active?: boolean;
    alignText?: Alignment;
    className?: string;
    disabled?: boolean;
    elementRef?: IRef<any>;
    fill?: boolean;
    icon?: JSX.Element | string;
    intent?: Intent;
    loading?: boolean;
    minimal?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    outlined?: boolean;
    rightIcon?: JSX.Element | string;
    leftIcon?: JSX.Element | string;
    size?: Size;
    text?: React.ReactNode;
    type?: "submit" | "reset" | "button";
}
