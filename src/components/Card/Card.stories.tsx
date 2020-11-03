// Generated with util/create-component.js
import React from "react";
import Card from "./Card";

import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
import { EDITABLE_TEXT } from "../../common/classes";
import { EditableText } from "../EditableText/EditableText";
import { Popover } from "../Popover/Popover";

export default {
  title: "Foundations/Card",
  decorators: [withKnobs],
  component: Card,
};

// export const card1 = () => (
//   <Card interactive={true}>
//     <h2> Card 1</h2>
//     <p>
//       {" "}
//       I can use this to store information and present it to people. The
//       background color is set to white but can be changed.
//     </p>
//   </Card>
// );

/**
 * A card with knobs
 */
export const cardWithKnobs = () => {
  return (
    <Card
      interactive={boolean("If card is interactive", false)}
      elevation={select("Shadow elevation of card", [0, 1, 2, 3, 4], 0)}
    >
      <h2> Card 2 </h2>
      <p>
        <EditableText
          elementName={"div"}
          placeholder={
            "This component can be used to store information or render other components; currently the background color is set to white but can be changed. For example, currently the editable text component has been placed in this card"
          }
          intent={"primary"}
          multiline={true}
        ></EditableText>
      </p>
    </Card>
  );
};

// export const cardTest = () => {
//   return (
//     <Card interactive={false}>
//       <Popover></Popover>
//     </Card>
//   );
// };
