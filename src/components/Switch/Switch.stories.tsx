// Generated with util/create-component.js
import React from "react";
import Switch from "./Switch";
import { Alignment } from "../../common";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { styleForStories } from "../../common/classes";

export default {
  title: "Foundations/Switch",
  decorators: [withKnobs],
  component: Switch,
};

export const SwitchExample = () => {
  return (
    <div style={styleForStories}>
      <div style={{display:"block"}}>
      <Switch
        isChecked={true}
        switchInline={boolean("Inline", false)}
        largeStyle={boolean("large", false)}
        disabled={boolean("disabled", false)}
        alignIndicator={select("align", ["left", "right"], "left")}
        innerLabelWhenChecked={text("Inner label when switch is checked", "")}
        unCheckedInnerLabel={text("Initial Inner Label", "")}
      >
        Switch1
      </Switch>
      <Switch
        isChecked={true}
        switchInline={boolean("Inline", false)}
        largeStyle={boolean("large", false)}
        disabled={boolean("disabled", false)}
        alignIndicator={select("align", ["left", "right"], "left")}
        innerLabelWhenChecked={text("Inner label when switch is checked", "")}
        unCheckedInnerLabel={text("Initial Inner Label", "")}
      >
        Switch2
      </Switch>
      </div>
    </div>
  );
};
