import React from "react";
import Divider from "./Divider";
import { select,withKnobs } from '@storybook/addon-knobs';
import {styleForStories} from '../../common/classes'
export default {
  title: "Foundations/Divider",
  component:Divider,
  decorators: [withKnobs],
};

export const DividerWithKnobs = () =>{

 return <div style={styleForStories}>
    <p>
      Home
      <Divider orientation={select("orientation",["vertical","horizontal"],"vertical")} />
      Profile
      <Divider orientation={select("orientation",["vertical","horizontal"],"vertical")} />
      Edit
      <Divider orientation={select("orientation",["vertical","horizontal"],"vertical")} />
      Create
      <Divider orientation={select("orientation",["vertical","horizontal"],"vertical")} />
      Delete
    </p>

    
  </div>
}


// export const withVerticalDivider = () => (
//   <div style={{width: "100px", height:"100px"}}>

//   <p>
//       Home
//       <Divider orientation="vertical" />
//       Profile
//       <Divider orientation="vertical" />
//       Edit
//       <Divider orientation="vertical" />
//       Create
//       <Divider orientation="vertical" />
//       Delete
//     </p>

//   </div>
// );

// export const withHorizontalDivider = () => (
//   <div>
//     <h3 >Horizontal Divider :</h3> 
//     <h4 >The width of the horizontal divider depends on the parent element width</h4>
//     <div style={{ width: "200px" }}>
      
//       <p style={{textAlign:"center"}}>
//         Home
//         <Divider orientation="horizontal" />
//         Profile
//         <Divider orientation="horizontal"/>
//         Edit
//         <Divider orientation="horizontal" />
//         Create
//         <Divider orientation="horizontal" />
//         Delete
//       </p>
//     </div>
//   </div>
// );
