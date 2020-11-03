// Generated with util/create-component.js
import React  from "react";
import Callout from "./Callout";
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
  } from "@storybook/addon-knobs";
export default {
    title: "Foundations/Callout",
    component:Callout,
    decorators: [withKnobs]
};


export const CalloutDefault = () =>{
    return(
        <div style={{paddingTop:200,paddingLeft:200}}>
        <Callout  
        intent={select(
        "Intent",
        ["primary", "success", "warning", "danger","none"],
        "none"
      )} heading ={text("heading","Visually Important Component")}
      >This is a callout example. You can try out the knobs as well.<br/> Note:Icon changes with the type of Intent</Callout>
        </div>
    )
}

export const CalloutWithKnobs = () =>{
  return(
      <div style={{paddingTop:200,paddingLeft:200}}>
      <Callout  
      intent={select(
      "Intent",
      ["primary", "success", "warning", "danger","none"],
      "Primary"
    )} heading ={text("heading","Visually Important Component")}
      iconName={select("iconName",["save","trash"],"save")}
    >This is a callout example. You can try out the knobs as well.<br/> Note:Icon changes with the type of Intent</Callout>
      </div>
  )
}

// export const PrimaryIntentCallout = () =>{
//     return(
//         <div style={{paddingTop:200,paddingLeft:200}}>
//         <Callout  intent="primary" heading ={"Callout with Primary Intent"} iconName="save"> This is an example of a callout with Primary Intent</Callout>
//         </div>
//     )
// }


// export const SuccessIntentCallout = () =>{
//     return(
//         <div style={{paddingTop:200,paddingLeft:200}}>
//         <Callout  intent="success" heading ={"Callout with Success Intent"}iconName="save"> This is an example of a callout with Success Intent</Callout>
//         </div>
//     )
// }

// export const DangerIntentCallout = () =>{
//     return(
//         <div style={{paddingTop:200,paddingLeft:200}}>
//         <Callout  intent="danger" heading ={"Callout with Danger Intent"}iconName="save"> This is an example of a callout with Danger Intent</Callout>
//         </div>
//     )
// }


// export const WarningIntentCallout = () =>{
//     return(
//         <div style={{paddingTop:200,paddingLeft:200}}>
//         <Callout  intent="warning" heading ={"Callout with Warning Intent"}iconName="save"> This is an example of a callout with Warning Intent</Callout>
//         </div>
//     )
// }