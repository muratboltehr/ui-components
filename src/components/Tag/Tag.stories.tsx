// Generated with util/create-component.js
import React from "react";
import Tag from "./Tag";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import {styleForStories} from '../../common/classes'

export default {
    title: "Foundations/Tag",
    decorators: [withKnobs],
    component:Tag
};

export const withTagKnob = () =>(
    <div style={styleForStories}>

    
    <div  style ={{width:200}}>
        <Tag   
            intent={select("intent",["none","primary","success","warning","danger"],"primary")}
            fill={boolean("Fill", false)}
            large={boolean("large", false)}
            minimal={boolean("minimal", false)}
            round={boolean("round", false)}
            interactive={boolean("interactive",false)   }
        >Tag with Knobs</Tag>
    </div>
    </div>
);

// export const fillTag = () =>(
//     <div style ={{width:100}}>
//         <Tag   intent="primary" fill={true}>Fill Tag</Tag>
//     </div>
// );

// export const largeTag = () =>(
//     <div >
//         <Tag  intent="primary" large={true}>Fill Tag</Tag>
//     </div>
// );

// export const minimalTag = () =>(
//     <div >
//         <Tag  intent="primary" minimal={true}>Fill Tag</Tag>
//     </div>
// );

// export const roundTag = () =>(
//     <div >
//         <Tag  intent="primary" round={true}>Fill Tag</Tag>
//     </div>
// );

// export const interactiveTag = () =>(
//     <div >
//         <Tag  interactive={true} intent="primary" >Fill Tag</Tag>
//     </div>
// );