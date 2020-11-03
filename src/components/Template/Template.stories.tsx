import React from "react";
import Template from "./Template";
import {
  withKnobs,
} from "@storybook/addon-knobs";
import {styleForStories} from '../../common/classes'

export default {
  title: "Foundations/Template",
  component:Template,
  decorators: [withKnobs]

};

export const Primary = () => <div style={styleForStories}>
<Template theme="primary" />;
</div> 

export const Secondary = () => <div style={styleForStories}>
<Template theme="secondary" />;
</div> ;