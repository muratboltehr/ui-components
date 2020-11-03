// Generated with util/create-component.js
import React from "react";
import Text from "./Text";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";

export default {
  title: "Foundations/Text",
  decorators: [withKnobs],
  component: Text,
};

export const TextWithKnobs = () => (
  <div style={{ width: "300px" }}>
    <Text
      ellipsize={boolean("Ellipsize", true)}
      elementName={select("Tag Name", ["div", "h1", "h2", "h3", "h4"], "div")}
    >
      {text(
        "Content",
        "This is a text component of width 300px , try typing more the text might get ellipsized depending on the width of the parent component"
      )}
    </Text>
  </div>
);

// export const TextWithEllipsize = () => (
//     <div style={{width:"300px"}}>
//     <Text ellipsize={true} >Example text component with Ellipsize set as TRUE. See for eg</Text>
//     </div>
//     );
//
// export const TextWithElement = () => (
//     <div >
//     <Text ellipsize={true} elementName="h1">Example text component with Ellipsize set as TRUE. See for eg the text might get cut depending on the size of outer div</Text>
//     </div>
//     );
