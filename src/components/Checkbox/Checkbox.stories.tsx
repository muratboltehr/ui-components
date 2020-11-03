// Generated with util/create-component.js
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Fix spacing (Remove me after fixing)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import React from "react";
import Checkbox from "./Checkbox";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { styleForStories } from "../../common/classes";
import { Classes } from "../../common";
export default {
  title: "Foundations/Checkbox",
  decorators: [withKnobs],
  component: Checkbox,
};

export const CheckBoxWithKnobs = () => {
  return (
    <div style={{...styleForStories}}>
      <div style={{display:"block"}}>
       <label className={Classes.LABEL}>Assign responsibility</label>
      <Checkbox
        checked={true}
        inline={boolean("Inline", false)}
        size={select("Size",["small","large"],"small")}
        disabled={boolean("disabled", false)}
        alignLabel={select("Align",["rightAlign","leftAlign"],"rightAlign")}
        label={'Gilad Gray'}
      >
      </Checkbox>
      <Checkbox
        checked={true}
        inline={boolean("Inline", false)}
        size={select("Size",["small","large"],"small")}
        
        disabled={boolean("disabled", false)}
        alignLabel={select("Align",["rightAlign","leftAlign"],"rightAlign")}
        label={'Jason Killian'}
      >
      </Checkbox>
      <Checkbox
        checked={true}
        inline={boolean("Inline", false)}
        size={select("Size",["small","large"],"small")}
        
        disabled={boolean("disabled", false)}
        alignLabel={select("Align",["rightAlign","leftAlign"],"rightAlign")}
        label={'Antoine Llorca'}
      >
      </Checkbox>

      </div>
    </div>
  );
};

// export const CheckBoxInline = () =>{
//     return(
//         <div style={{float:"left"}}>
//             <Checkbox
//             inline={true}>
//                 Checkbox 1
//             </Checkbox><Checkbox
//             inline={true}>
//                 Checkbox 2
//             </Checkbox>
//         </div>
//     )
// }

// export const CheckBoxLarge = () =>{
//     return(
//         <div style={{float:"left"}}>
//             <Checkbox
//             large={true}>
//                 Checkbox 1
//             </Checkbox>
//             <Checkbox
//             large={true}>
//                 Checkbox 2
//             </Checkbox>
//         </div>
//     )
// }
//
//
// export const CheckBoxDisabled = () =>{
//     return(
//         <div style={{float:"left"}}>
//             <Checkbox
//             disabled={true}>
//                 Disabled Checkbox
//             </Checkbox>
//         </div>
//     )
// }
//
//
// export const CheckBoxRightAlign = () =>{
//     return(
//         <div style={{float:"left"}}>
//             <Checkbox
//             align={"right"}>
//                 Right Aligned Checkbox
//             </Checkbox>
//         </div>
//     )
// }
