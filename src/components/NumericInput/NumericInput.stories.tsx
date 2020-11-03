// Generated with util/create-component.js
import React from "react";
import NumericInput from "./NumericInput";
import {styleForStories} from '../../common/classes'
import {
    withKnobs,
    select,
    boolean,number,text
  } from "@storybook/addon-knobs";
export default {
    title: "Foundations/NumericInput",
    component:NumericInput,
    decorators: [withKnobs],
    
};

export const NumericInputKnob = () => {

  return <div style={styleForStories}>
     <NumericInput  placeholder={text('placeholder','enter your lucky number')} buttonPosition={select('buttonPostion',['left','right'],'right')} min={number('min',0)} max={number('max',10)} disabled={boolean('disabled',false)}  />

  </div>
}


