// Generated with util/create-component.js
import React,{Component} from "react";

import { RadioButtonProps } from "./RadioButton.types";
import {Classes} from "../../common";
import classNames from "classnames"

import "./RadioButton.scss";


export class RadioButton extends Component<RadioButtonProps> {

  render() {

    const  {disabled,inline,size,className,alignLabel,label,name,value,onChange,checked}=this.props;
    const labelClass = classNames('radioBtn',Classes.CONTROL,Classes.RADIO,{[Classes.ALIGN_RIGHT]:alignLabel==="rightAlign",[Classes.LARGE_RADIO]: size==="large" ,[Classes.INLINE]:inline})
    return (
      <label className={labelClass}>
      <input type="radio" name={name} value={value} onChange={onChange} checked={checked} disabled={disabled} />
      <span className={Classes.CONTROL_INDICATOR}></span>
    <span className={`${disabled ? Classes.DISABLED: null}`}>{label}</span>
    </label>
  
      
    );
  }
}

export default RadioButton;

