// Generated with util/create-component.js
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Check "Fixed to top of Page" knob working (Remove me after fixing)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import React from "react";
import NavBar from "./NavBar";
import { Alignment } from "../../common/enums";
import {styleForStories} from '../../common/classes';
import Button from '../Button/Button'
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
import { Classes } from "../../common";

export default {
  title: "Foundations/NavBar",
  decorators: [withKnobs],
  component: NavBar,
};

export const navBarKnobs = () => {
  return (
    <div style={styleForStories}>
    <NavBar fixedToTop={boolean("Fixed to top of Page", false)}>
      <NavBar.Group style={{width:"200px"}}
        align={select("Align Contents", ["center", "right", "left"], "left")}
      >
        <NavBar.Header>Optum </NavBar.Header>
        <NavBar.Divider />
        <Button type='button' className={Classes.MINIMAL} text='Home'></Button>
        <Button type='button' className={Classes.MINIMAL} text='About US'></Button>
             </NavBar.Group>
    </NavBar>
    </div>
  );
};

// export const firstNavBar = () => (
//   <NavBar fixedToTop={false}>
//     <NavBar.Group align={Alignment.LEFT}>
//       <NavBar.Header>Header</NavBar.Header>
//       <NavBar.Divider />
//     </NavBar.Group>
//   </NavBar>
// );
//
// export const NavBar2 = () => (
//   <NavBar fixedToTop={true}>
//     <NavBar.Group align={Alignment.RIGHT}>
//       <NavBar.Header>Header</NavBar.Header>
//       <NavBar.Divider />
//       <button> Random </button>
//     </NavBar.Group>
//   </NavBar>
// );
//
// export const NavBar3 = () => (
//   <NavBar fixedToTop={true}>
//     <NavBar.Group align={Alignment.CENTER}>
//       <NavBar.Header>Header</NavBar.Header>
//       <NavBar.Divider />
//       <button> Random </button>
//     </NavBar.Group>
//   </NavBar>
// );
//
