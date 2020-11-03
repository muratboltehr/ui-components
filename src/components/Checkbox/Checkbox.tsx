// Generated with util/create-component.js
import React,{Component} from "react";
import { CheckboxProps } from "./Checkbox.types";
import classNames from "classnames";
import {Classes} from '../../common';
import "./Checkbox.scss";


export class Checkbox extends Component<CheckboxProps> {

  
  
  render() {
    // const {
    //   checked,
    //   align,
    //   disabled,
    //   inline,
    //   large,
    //   onChange,
    //   //label
    // } = this.props;

    // const _className = classNames(
    //   Classes.CHECKBOX,
    //   {
    //     [Classes.DISABLED]: disabled,
    //     [Classes.CHECKED]: checked,
    //     [Classes.INLINE]: inline,
    //     [Classes.LARGE]: large,
    //   },
    //   Classes.alignmentClass(align)

    // ) 

    // console.log(_className);
    // // var check= (checked===false||checked===undefined?"notchecked":"checked");
    // // var disable = (disabled===false||disabled===undefined?"notdisabled":"disabled");
    // // var inlined = (inline===false||checked===undefined?"notinlined":"inlined");
    // return (
    //   <div className={_className}>
    //     <input type="checkbox"></input>
    //     {this.props.children}
    //   </div>
      
    // );
  // }
    const  {disabled,inline,size,className,alignLabel,label,name,value,checked}=this.props;
    const { onChange = ()=>{}} = this.props
    const labelClass = classNames(Classes.CONTROL,Classes.CHECKBOX,{[Classes.ALIGN_RIGHT]:alignLabel==="rightAlign",[Classes.LARGE_RADIO]: size==="large" ,[Classes.INLINE]:inline})
    return (
    
      <label className={labelClass}>
      <input type="checkbox" name={name} value={value} onChange={onChange} disabled={disabled} />
      <span className={Classes.CONTROL_INDICATOR}></span>
    <span className={`${disabled ? Classes.DISABLED: null}`}>{label}</span>
    </label>
      
    );
  }
}

export default Checkbox;

