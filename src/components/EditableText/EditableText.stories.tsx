// Generated with util/create-component.js
import React from "react";
import EditableText from "./EditableText";
import { styleForStories } from "../../common/classes";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";

export default {
  title: "Foundations/EditableText",
  component: EditableText,
  decorators: [withKnobs],
};

export const EditableTextWithKnobs = () => (
  <div style={styleForStories}>
    <div style={{ width: "500px" }}>
      <EditableText
        elementName={select(
          "Element Name",
          ["div", "h1", "h2", "h3", "h4", "p"],
          "div"
        )}
        placeholder={text("PlaceHolder", "Enter text here")}
        intent={select(
          "Intent",
          ["primary", "success", "warning", "danger", "none"],
          "primary"
        )}
        multiline={boolean("Multiline", false)}
        minimumLines={number("Minimum Lines", 3)}
        maxLines={number("Minimum Lines", 10)}
        confirmEnter={boolean("Confirm on Enter press", false)}
        disabled={boolean("Disabled", false)}
      ></EditableText>
    </div>
  </div>
);
