// Generated with util/create-component.js
import { IProps,IIntentProps,Position } from "../../common";

export interface NumericInputProps extends IIntentProps, IProps {
    /**
     * Whether to allow only floating-point number characters in the field,
     * mimicking the native `input[type="number"]`.
     * @default true
     */
    allowNumericCharactersOnly?: boolean;

    /**
     * The position of the buttons with respect to the input field.
     * @default Position.RIGHT
     */
    buttonPosition?: typeof Position.LEFT | typeof Position.RIGHT | "none";

    /**
     * Whether the value should be clamped to `[min, max]` on blur.
     * The value will be clamped to each bound only if the bound is defined.
     * Note that native `input[type="number"]` controls do *NOT* clamp on blur.
     * @default false
     */
    clampValueOnBlur?: boolean;

    /**
     * In uncontrolled mode, this sets the default value of the input.
     * Note that this value is only used upon component instantiation and changes to this prop
     * during the component lifecycle will be ignored.
     * @default ""
     */
    defaultValue?: number | string;

    /**
     * Whether the input is non-interactive.
     * @default false
     */
    disabled?: boolean;

    /** Whether the numeric input should take up the full width of its container. */
    fill?: boolean;

    /**
     * Ref handler that receives HTML `<input>` element backing this component.
     */
    inputRef?: (ref: HTMLInputElement | null) => any;

    /**
     * If set to `true`, the input will display with larger styling.
     * This is equivalent to setting `Classes.LARGE` via className on the
     * parent control group and on the child input group.
     * @default false
     */
    large?: boolean;

    /**
     * Name of a Blueprint UI icon (or an icon element) to render on the left side of input.
     */
    // leftIcon?: IconName | MaybeElement;

    /**
     * The increment between successive values when <kbd>shift</kbd> is held.
     * Pass explicit `null` value to disable this interaction.
     * @default 10
     */
    majorStepSize?: number | null;

    /** The maximum value of the input. */
    max?: number;

    /** The minimum value of the input. */
    min?: number;

    /**
     * The increment between successive values when <kbd>alt</kbd> is held.
     * Pass explicit `null` value to disable this interaction.
     * @default 0.1
     */
    minorStepSize?: number | null;

    /** The placeholder text in the absence of any value. */
    placeholder?: string;

    /**
     * Element to render on right side of input.
     * For best results, use a minimal button, tag, or small spinner.
     */
    rightElement?: JSX.Element;

    /**
     * Whether the entire text field should be selected on focus.
     * @default false
     */
    selectAllOnFocus?: boolean;

    /**
     * Whether the entire text field should be selected on increment.
     * @default false
     */
    selectAllOnIncrement?: boolean;

    /**
     * The increment between successive values when no modifier keys are held.
     * @default 1
     */
    stepSize?: number;

    /** The value to display in the input field. */
    value?: number | string;

    /** The callback invoked when the value changes due to a button click. */
    onButtonClick?(valueAsNumber: number, valueAsString: string): void;

    /** The callback invoked when the value changes due to typing, arrow keys, or button clicks. */
    onValueChange?(valueAsNumber: number, valueAsString: string, inputElement: HTMLInputElement | null): void;

    /**
     * If set to `true`, the input will display with smaller styling.
     * This is equivalent to setting `Classes.SMALL` via className on the
     * parent control group and on the child input group.
     * @default false
     */
    small?: Boolean;
}

export interface INumericInputState {
    currentImeInputInvalid: boolean;
    prevMinProp?: number;
    prevMaxProp?: number;
    prevValueProp?: number | string;
    shouldSelectAfterUpdate: boolean;
    stepMaxPrecision: number;
    value: string;
}

export enum IncrementDirection {
    DOWN = -1,
    UP = +1,
}

export const NON_HTML_PROPS: Array<keyof NumericInputProps> = [
    "allowNumericCharactersOnly",
    "buttonPosition",
    "clampValueOnBlur",
    "className",
    "defaultValue",
    "majorStepSize",
    "minorStepSize",
    "onButtonClick",
    "onValueChange",
    "selectAllOnFocus",
    "selectAllOnIncrement",
    "stepSize",
];

export type ButtonEventHandlers = Required<Pick<React.HTMLAttributes<Element>, "onKeyDown" | "onMouseDown">>;