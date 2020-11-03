// Generated with util/create-component.js
import React from "react";
import ProgressBar from "./ProgressBar";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
export default {
  title: "Foundations/ProgressBar",
  component: ProgressBar,
  decorators: [withKnobs],
};

export const ProgressBarWithKnobs = () => {
  return (
    <ProgressBar
      intent={select(
        "Intent",
        ["primary", "success", "warning", "danger", "none"],
        "none"
      )}
      animation={boolean("animation", true)}
      stripes={boolean("stripes", true)}
      value={number("value", 100)}
    />
  );
};

// export const ProgressBarWithAnimation = () => {
//     return (
//     <ProgressBar  intent="danger" />);
//     };
//
// export const ProgressBarHalfLoaded = () =>{
//     return(
//         <ProgressBar intent="danger" value={50}/>
//     );
// };
// export const ProgressBarWithStripes = () => {
//     return(
//         <ProgressBar intent="danger"/>
//     );
// };
