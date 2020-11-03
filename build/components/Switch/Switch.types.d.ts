/// <reference types="react" />
import { Alignment, IProps, HTMLInputProps } from "../../common";
export interface ControlProps extends IProps, HTMLInputProps {
    /**
     * Alignment of the indicator within container.
     * @default Alignment.LEFT
     */
    alignIndicator?: Alignment;
    /** Whether the control is checked. */
    isChecked?: boolean;
    /** Children for the component */
    children?: React.ReactNode;
    /** Whether the control is initially checked (uncontrolled mode). */
    isCheckedByDefault?: boolean;
    /** Whether the switch is disabled. */
    disabled?: boolean;
    /** Ref handler that receives HTML `<input>` element backing this component. */
    inputRef?: (ref: HTMLInputElement | null) => any;
    /** Whether the control should appear as an inline element. */
    switchInline?: boolean;
    /**
     * Text label for the control.
     */
    label?: string;
    /**
     * JSX Element label for the control.
     */
    labelElement?: React.ReactNode;
    /** Whether this control should use large styles. */
    largeStyle?: boolean;
    /**
     * Name of the HTML tag that wraps the checkbox.
     * @default "label"
     */
    tagName?: keyof JSX.IntrinsicElements;
}
export interface SwitchProps extends ControlProps {
    /**
     * Text to display inside the switch indicator when checked.
     * @default innerLabel
     */
    innerLabelWhenChecked?: string;
    /**
     * Text to display inside the switch indicator when unchecked.
     */
    unCheckedInnerLabel?: string;
}
export interface InternalControlProps extends ControlProps {
    type: "checkbox" | "radio";
    controlTypeClassName: string;
    indicatorChildren?: React.ReactNode;
}
