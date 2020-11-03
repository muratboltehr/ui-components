// Generated with util/create-component.js
import React, { useState } from "react";
import RadioButtonGroup from "./RadioButtonGroup";
import {styleForStories} from '../../common/classes'
import {action,withActions} from '@storybook/addon-actions'
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
  } from "@storybook/addon-knobs";


export default {
    title: "Foundations/RadioButtonGroup",
    actions: { argTypesRegex: '^on[A-Z].*' },
    decorators: [withKnobs,withActions],
    component:RadioButtonGroup,
};
const sample1=[{value:"soup",label:'Soup' },{value:"salad",label:'Salad'},{value:"sandwitch",label:'Sandwich'}];
const sample2=[{value:'one',label:'Soup'},{value:'two',label:'Salad',disabled:true },{value:'three',label:'Sandwich'}];
export const withRadioGroupKnob = () => {
    const [selectedValue,setValue]=useState("");
    const selectRadio=(event)=>{
        const {value}=event.target;
        setValue(value)
    }

    return ( <div style={styleForStories} >
      <RadioButtonGroup
      label={text("Label","Determine lunch")}
      disabled={boolean("Disabled", false)}
      inline={boolean("Inline", false)}
      onChange={selectRadio}
      size={select("Size",["small","large"],"small")}
      alignLabel={select("Align",["rightAlign","leftAlign"],"rightAlign")}
      options={sample1}
      selectedValue={selectedValue}
        ></RadioButtonGroup>

    </div>
      
    );
  };
// export const standardRadioGroup = () => {
  
//     const [selectedValue,setValue]=useState("");
//     const selectRadio=(event)=>{
//         const {value}=event.target;
//         setValue(value)
//     }
 
// return <RadioButtonGroup label='Select your option' options={sample1} name='test' onChange={selectRadio} selectedValue={selectedValue}/>;
// }   

// export const WithDisabledRadio = () => {
//     const [selectedValue,setValue]=useState("");
//     const selectRadio=(event)=>{
//         const {value}=event.target;
//         setValue(value)
//     }
//    return (<RadioButtonGroup label='Determine Lunch' onChange={selectRadio} options={sample2} name='withDisabled' selectedValue={selectedValue} />);
// }

// export const RadioGroupInline = () => {
//     const [selectedValue,setValue]=useState("");
//     const selectRadio=(event)=>{
//         const {value}=event.target;
//         setValue(value)
//     }

    
//    return (<RadioButtonGroup label="Select Radio" onChange={selectRadio} options={sample2} name='withDisabled' inline={true} selectedValue={selectedValue} />);
// }
// export const RadioGroupDefaultValue = () => {
//     const [selectedValue,setValue]=useState("fb");
//     const selectRadio=(event)=>{
//         const {value}=event.target;
//         console.log(event.target);
//         setValue(value)
//     }
//    return (<RadioButtonGroup label='Social Media' onChange={selectRadio}  name='withDisabled' inline={true} selectedValue={selectedValue}>
//        <RadioButton label="Facebook" value={"fb"}  onChange={()=>{}} ></RadioButton>
//        <RadioButton label="Instagram" value={"insta"}  onChange={()=>{}}></RadioButton>
//        <RadioButton label="Twitter" value={"twit"} onChange={()=>{}}></RadioButton>
//        </RadioButtonGroup>);
// }
