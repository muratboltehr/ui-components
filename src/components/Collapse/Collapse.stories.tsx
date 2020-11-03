import React, { useState } from "react";
import Alert, { Collapse } from "./Collapse";
import Button from "../Button/Button";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
import { styleForStories } from "../../common/classes";

export default {
  title: "Foundations/Collapse",
  decorators: [withKnobs],
  component: Collapse,
};

export const collapseExample = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div style={styleForStories}>
      <div>
      <Button
        onClick={() => {
          setOpen(!isOpen);
        }}
        intent='success'
      >
        Click to open Collapse
      </Button>
      <Collapse isOpen={isOpen} className={'collapse-example'}>
        <div>
          <h3>Hello Master</h3>
          Information can be place here and will only open when the button is
          clicked on. An option to render information even while the collapse is
          closed is available.
          <p>
            
          Information can be place here and will only open when the button is
          clicked on. An option to render information even while the collapse is
          closed is available.
          </p>
          <p>
            
          Information can be place here and will only open when the button is
          clicked on. An option to render information even while the collapse is
          closed is available.
          </p>
        </div>
      </Collapse>
      </div>
    </div>
  );
};
