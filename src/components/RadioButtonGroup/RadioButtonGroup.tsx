// Generated with util/create-component.js
import React,{Component} from "react";
import RadioButton from '../RadioButton/RadioButton'
import {Classes} from "../../common"
import {IOptionProps} from "../../common/props"

import { RadioButtonGroupProps } from "./RadioButtonGroup.types";

import "./RadioButtonGroup.scss";

/**
 * A radio button typically represents a single option in a mutually exclusive list (where only one item can be selected at a time).
 * <br/>
 * This Library provides Radio and RadioGroup components for these two layers.
 */
export class RadioButtonGroup extends Component<RadioButtonGroupProps> {
 
   public state={
      selectedValue: this.props.selectedValue
   }
   public render() {
    const { name,label,inline } = this.props;
   
    return (
        <div className={`${this.props.className}`}>
            {label == null ? null : <label className={`${Classes.LABEL}`}>{label}</label>}
            {Array.isArray(this.props.options) ? this.renderOptions() : this.renderChildren()}
        </div>
    );
}
 
selectRadio = (event): void => {
  this.props.onChange(event);
 
};


private renderOptions() {
  return this.props.options.map(option =>{ 
    const  {label,value}=option;
     return  <RadioButton {...this.getRadioProps(option)}  label={label || value} key={value} />
       
  });
  
}
private renderChildren() {
  return React.Children.map(this.props.children, child => {
      if (React.isValidElement(child)) {
          return React.cloneElement(child, this.getRadioProps(child.props as IOptionProps));
      } else {
          return child;
      }
  });
}
private getRadioProps(optionProps: IOptionProps) {
  const { name ,size,alignLabel} = this.props;
  const { className, disabled, value } = optionProps;
  return {
      checked: value == this.props.selectedValue,
      className,
      disabled: disabled || this.props.disabled,
      inline: this.props.inline,
      name: name == null ? "Radio" : name,
      onChange: this.props.onChange,
      value,
      size,
      alignLabel
  };
}
}


export default RadioButtonGroup;

