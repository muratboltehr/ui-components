// Generated with util/create-component.js
import React, { Fragment } from "react";
import Tooltip from "./Tooltip";
import { Position } from "../../common/position";
import { Intent } from "../../common";
import {styleForStories} from '../../common/classes'
import {
    withKnobs,
    select,
  } from "@storybook/addon-knobs";

export default {
    title: "Foundations/Tooltip"
};

export const TooltipKnob = () => {
    const jsxContent = (<div>
            This is tooltip content.
            </div>
    )

    return(
        <div style={styleForStories}>
        <div>
        <Tooltip content={jsxContent} placement='bottom' > <span style={{margin:'10px'}}> Bottom
</span>        </Tooltip>
        <Tooltip content={jsxContent} placement='top' > <span style={{margin:'10px'}}> Top </span> </Tooltip>
        <Tooltip content={jsxContent} placement='right' > <span style={{margin:'10px'}}> Right </span></Tooltip>
        <Tooltip content={jsxContent} placement='left' > <span style={{margin:'10px'}}> Left </span></Tooltip>
        </div>
        </div>
        
    )
}

