import React, { Component } from "react";
import { RadioButtonGroupProps } from "./RadioButtonGroup.types";
import "./RadioButtonGroup.scss";
/**
 * A radio button typically represents a single option in a mutually exclusive list (where only one item can be selected at a time).
 * <br/>
 * This Library provides Radio and RadioGroup components for these two layers.
 */
export declare class RadioButtonGroup extends Component<RadioButtonGroupProps> {
    state: {
        selectedValue: React.ReactText;
    };
    render(): JSX.Element;
    selectRadio: (event: any) => void;
    private renderOptions;
    private renderChildren;
    private getRadioProps;
}
export default RadioButtonGroup;
