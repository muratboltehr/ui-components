import React from "react";
import { HTMLInputProps, AbstractPureComponent2 } from "../../common";
import { NumericInputProps, INumericInputState } from "./NumericInput.types";
import "./NumericInput.scss";
/**
 * The NumericInput component provides controls for easily inputting, incrementing, and decrementing numeric values.
 * Values in numeric inputs can be incremented or decremented using both keyboard and mouse interactions.
 * <br/> <br/>
 * <h2>Keyboard interactions</h2>
 * <ul>
 * <li>↑/↓ - change the value by one step (default: ±1) </li>
 * <li>Shift + ↑/↓ - change the value by one major step (default: ±10)</li>
 * <li>Alt + ↑/↓ - change the value by one minor step (default: ±0.1)</li>
 * </ul>
 * <h2>Mouse interactions</h2>
 * <ul>
 * <li>Click ⌃/⌄ - change the value by one step (default: ±1)</li>
 * <li>Shift + Click ⌃/⌄ - change the value by one major step (default: ±10)</li>
 * <li>Alt + Click ⌃/⌄ - change the value by one minor step (default: ±0.1)</li>
 * </ul>
 */
export declare class NumericInput extends AbstractPureComponent2<HTMLInputProps & NumericInputProps, INumericInputState> {
    static VALUE_EMPTY: string;
    static VALUE_ZERO: string;
    private inputElement;
    static defaultProps: NumericInputProps;
    static getDerivedStateFromProps(props: NumericInputProps, state: INumericInputState): {
        stepMaxPrecision: number;
        value: string;
        prevMaxProp: number;
        prevMinProp: number;
        prevValueProp: React.ReactText;
    };
    private static CONTINUOUS_CHANGE_DELAY;
    private static CONTINUOUS_CHANGE_INTERVAL;
    private static getStepMaxPrecision;
    private static roundAndClampValue;
    state: INumericInputState;
    private incrementButtonHandlers;
    private decrementButtonHandlers;
    private intervalId;
    private delta;
    private didPasteEventJustOccur;
    render(): JSX.Element;
    private renderInput;
    private renderButtons;
    private handleInputKeyDown;
    private getButtonEventHandlers;
    private handleButtonClick;
    private startContinuousChange;
    private stopContinuousChange;
    private handleContinuousChange;
    private handleInputFocus;
    private handleInputChange;
    private handleNextValue;
    private incrementValue;
    private getIncrementDelta;
    private roundAndClampValue;
    private updateDelta;
}
export default NumericInput;
