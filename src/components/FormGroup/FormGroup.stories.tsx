// Generated with util/create-component.js
import React from "react";
import { FormGroup } from "./FormGroup";
import { boolean, text, select } from "@storybook/addon-knobs";
import { styleForStories } from "../../common/classes";
export default {

  title: "Foundations/FormGroup",
};

export const FormGroupWithKnobs = () => {
  return (
    <div style={styleForStories}>
      <div>
      <FormGroup
        disabled={boolean("Disabled", false)}
        helperText={
          boolean("helperTextRequired", true) &&
          text("HelperText", "Helper text with details...")
        }
        // inline={boolean("Inline",false)}
        inline={boolean('inline',true)}
        required={boolean("required",true)}
        label={text("LabelText", "LabelName")}
        placeholder={text("Placeholder", "Input Box")}
        isInvalid={boolean("Invalid",false)}
      >
      </FormGroup>
      </div>
    </div>
  );
};
export const FormGroupInline = () =>(
  <div>
    <FormGroup
      disabled={boolean("Disabled", false)}
      helperText={boolean("helperTextRequired", true) &&
        text("HelperText", "Helper text with details...")}
      inline={boolean('inline', true)}
      required={boolean("required", true)}
      label={text("LabelText", "LabelName")}
      placeholder={text("Placeholder", "Input Box")}
      isInvalid={boolean("Invalid", false)}
    >
    </FormGroup>
    <FormGroup label='Email' required={true} inline={true}>
    </FormGroup>
  </div>
);