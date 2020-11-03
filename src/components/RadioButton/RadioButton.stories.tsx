// Generated with util/create-component.js
import React from "react";
import RadioButton from "./RadioButton";
import {styleForStories} from '../../common/classes'
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
  } from "@storybook/addon-knobs";
  

export default {
    title: "Foundations/RadioButton",
    decorators: [withKnobs],
    component:RadioButton
};

export const withRadioKnob = () => {

    return ( <div style={styleForStories}>
     <RadioButton
       label={text("Label","Dinner")}
       size={select("Size",["small","large"],"small")}
       alignLabel={select("Align",["rightAlign","leftAlign"],"leftAlign")}
       disabled={boolean("Disabled", false)}
       onChange={()=>null}
        />
    </div>
     
    );
  };

// export const standardRadio = () => <RadioButton label='Standard' onChange={()=>null}/>;
// export const largeRadio = () => <RadioButton size='large' label='largeRadio' onChange={()=>null}/>;
// export const smallRadio = () => <RadioButton size='small' label='smallRadio' onChange={()=>null}/>;

// export const DisabledRadio = () => <RadioButton label='DisabledRadio' disabled={true} onChange={()=>null}/>;

// export const alignLabelRightRadio = () => <div><RadioButton label='AlignLabelRadio'  alignLabel={select("Align",["rightAlign","leftAlign"],"leftAlign")} onChange={()=>null}/></div>;
