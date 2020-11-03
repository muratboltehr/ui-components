// Merge
// Generated with util/create-component.js
import React from "react";
import ButtonGroup from "./ButtonGroup";
import { Button } from "../Button/Button";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Foundations/ButtonGroup",
  decorators: [withKnobs],
  component: ButtonGroup,
};

// const simple_button_Group = () => (
//   <ButtonGroup >
//     <ButtonV intent="primary">primary button</ButtonV>
//     <ButtonV intent="danger">danger button</ButtonV>
//   </ButtonGroup>
// );
//
//  const Vertical_Filled_button_group = () => (
//   <ButtonGroup fill vertical>
//     <Button intent="primary">primary button</Button>
//     <Button intent="danger">danger button</Button>
//     <Button intent="warning">primary button</Button>
//     <Button intent="success">danger button</Button>
//   </ButtonGroup>
// );
//
//  const Filled_button_group = () => (
//   <ButtonGroup fill>
//     <Button intent="primary">primary button</Button>
//     <Button intent="danger">danger button</Button>
//     <Button intent="warning">primary button</Button>
//     <Button intent="success">danger button</Button>
//   </ButtonGroup>
// );
//
//  const minimal_button_group = () => (
//   <ButtonGroup minimal>
//     <Button intent="primary">primary button</Button>
//     <Button intent="danger">danger button</Button>
//     <Button intent="warning">primary button</Button>
//     <Button intent="success">danger button</Button>
//   </ButtonGroup>
// );
//
//  const large_button_group = () => (
//   <ButtonGroup large>
//     <Button intent="primary">primary button</Button>
//     <Button intent="danger">danger button</Button>
//     <Button intent="warning">primary button</Button>
//     <Button intent="success">danger button</Button>
//   </ButtonGroup>
// );

// const simple_button_Group = () => (
//   <ButtonGroup >
//     <Button intent="primary">primary button</Button>
//     <Button intent="danger">danger button</Button>
//   </ButtonGroup>
// );
//
//  const Vertical_Filled_button_group = () => (
//   <ButtonGroup fill vertical>
//     <Button intent="primary">primary button</Button>
//     <Button intent="danger">danger button</Button>
//     <Button intent="warning">primary button</Button>
//     <Button intent="success">danger button</Button>
//   </ButtonGroup>
// );
//
//  const Filled_button_group = () => (
//   <ButtonGroup fill>
//     <Button intent="primary">primary button</Button>
//     <Button intent="danger">danger button</Button>
//     <Button intent="warning">primary button</Button>
//     <Button intent="success">danger button</Button>
//   </ButtonGroup>
// );
//
//  const minimal_button_group = () => (
//   <ButtonGroup minimal>
//     <Button intent="primary">primary button</Button>
//     <Button intent="danger">danger button</Button>
//     <Button intent="warning">primary button</Button>
//     <Button intent="success">danger button</Button>
//   </ButtonGroup>
// );
//
//  const large_button_group = () => (
//   <ButtonGroup large>
//     <Button intent="primary">primary button</Button>
//     <Button intent="danger">danger button</Button>
//     <Button intent="warning">primary button</Button>
//     <Button intent="success">danger button</Button>
//   </ButtonGroup>
// );

export const ButtonGroupKnob = () => {
  const mystyle = {
    color: "white",
    padding: "10%",
    fontFamily: "Arial",
    textAlign: "center" as const,
    height: "300px",
  };
  return (
    <div style={mystyle}>
      <ButtonGroup
        large={boolean("large", false)}
        minimal={boolean("mimimal", false)}
        vertical={boolean("vertical", false)}
        fill={boolean("fill", false)}
      >
        <Button intent="primary">primary button</Button>
        <Button intent="danger">danger button</Button>
        <Button intent="warning">primary button</Button>
        <Button intent="success">danger button</Button>
      </ButtonGroup>
    </div>
  );
};
