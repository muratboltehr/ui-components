import React from "react";
import SpinnerShape from "./Spinner";
import {
  withKnobs,
  select,
} from "@storybook/addon-knobs";

export default {
  title: "Foundations/Spinners",
  decorators: [withKnobs],
  component:SpinnerShape
};

export const spinnerKnobs = () => {
  const mystyle = {
    color: "white",
    padding: "8%",
    fontFamily: "Arial",
    textAlign:"center",
    height:'200px',
    margin:'10%',
    border: '3px solid #93b5e1'
  };
  return (
    <div style={mystyle}>
    <SpinnerShape
      intent={select(
        "Intent",
        ["primary", "warning", "success", "danger"],
        "primary"
      )}
      size={select("Size of Spinner", ["small", "large", "medium"], "medium")}
      className="knobSpinner"
    />
    </div>
  );
};

// export const primarySpinner = () => (
//   <SpinnerShape intent="primary" className="spinner1" size="small" />
// );
// export const defaultSpinner = () => (
//   <SpinnerShape size="none" intent="none" className="spinner2" />
// );
// export const warningSpinner = () => (
//   <SpinnerShape intent="warning" className="spinner2" size="medium" />
// );
// export const successSpinner = () => (
//   <SpinnerShape size="medium" intent="success" className="spinner3" />
// );
// export const dangerSpinner = () => (
//   <SpinnerShape size="large" intent="danger" className="spinner4" />
// );
