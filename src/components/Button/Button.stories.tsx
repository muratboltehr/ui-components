import React from "react";
import Button from "./Button";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
import { styleForStories } from "../../common/classes";

export default {
  title: "Foundations/Button",
  decorators: [withKnobs],
  component: Button,
};
/**
 * Active button with primary intent
 */
// export const asDynamicVariables = () => {
//    const name = text("Name", "James");
//    const age = number("Age", 35);
//    const content = `I am ${name} and I'm ${age} years old.`;
//    return <div>{content}</div>;
// };
export const withButtonKnob = () => {
  const mystyle = {
    color: "white",
    padding: "10%",
    fontFamily: "Arial",
    textAlign: "center" as const,
    height: "200px",
  };
  return (
    <div style={styleForStories}>
      <div style={{display:"block" , width:"90%"}}>
        <Button
          type={select("Type", ["button", "submit", "reset"], "button")}
          disabled={boolean("Disabled", false)}
          large={boolean("Large", false)}
          loading={boolean("Loading", false)}
          fill={boolean("Fill", false)}
          minimal={boolean("Minimal", false)}
          outlined={boolean("Outlined", false)}
          intent={select(
            "Intent",
            ["primary", "success", "warning", "danger", "none"],
            "primary"
          )}
        >
          Primary Active
        </Button>
      </div>
    </div>
  );
};

// export const Active = () => (
//   <div>
//     <Button type="button" active intent="primary">
//       Primary Active
//     </Button>{" "}
//     &nbsp;
//     <Button type="button" intent="success">
//       Success Active
//     </Button>
//     &nbsp;
//     <Button type="button" intent="danger">
//       Danger Active
//     </Button>
//     &nbsp;
//     <Button type="button" intent="warning">
//       Warning Active
//     </Button>
//   </div>
// );
// export const Disabled = () => (
//   <div>
//     <Button type="button" disabled intent="primary">
//       Primary
//     </Button>{" "}
//     &nbsp;
//     <Button type="button" disabled intent="success">
//       Success
//     </Button>
//     &nbsp;
//     <Button type="button" disabled intent="danger">
//       Danger
//     </Button>
//     &nbsp;
//     <Button type="button" disabled intent="warning">
//       Warning
//     </Button>
//   </div>
// );
// export const Large = () => (
//   <div>
//     <Button type="button" large intent="primary">
//       Primary
//     </Button>{" "}
//     &nbsp;
//     <Button type="button" large intent="success">
//       Success
//     </Button>
//     &nbsp;
//     <Button type="button" large intent="danger">
//       Danger
//     </Button>
//     &nbsp;
//     <Button type="button" large intent="warning">
//       Warning
//     </Button>
//   </div>
// );
// export const Minimal = () => (
//   <div>
//     <Button type="button" minimal intent="primary">
//       Primary
//     </Button>{" "}
//     &nbsp;
//     <Button type="button" minimal intent="success">
//       Success
//     </Button>
//     &nbsp;
//     <Button type="button" minimal intent="danger">
//       Danger
//     </Button>
//     &nbsp;
//     <Button type="button" minimal intent="warning">
//       Warning
//     </Button>
//   </div>
// );
// export const Outlined = () => (
//   <div>
//     <Button type="button" outlined intent="primary">
//       Primary
//     </Button>{" "}
//     &nbsp;
//     <Button type="button" outlined intent="success">
//       Success
//     </Button>
//     &nbsp;
//     <Button type="button" outlined intent="danger">
//       Danger
//     </Button>
//     &nbsp;
//     <Button type="button" outlined intent="warning">
//       Warning
//     </Button>
//   </div>
// );
// export const Fill = () => (
//   <div>
//     <Button type="button" fill intent="primary">
//       Primary
//     </Button>{" "}
//     &nbsp;
//     <Button type="button" fill intent="success">
//       Success
//     </Button>
//     &nbsp;
//     <Button type="button" fill intent="danger">
//       Danger
//     </Button>
//     &nbsp;
//     <Button type="button" fill intent="warning">
//       Warning
//     </Button>
//   </div>
// );
// export const LeftIcon = () => (
//   <div>
//     <Button type="button" lefttIcon="save" intent="primary">
//       Primary Active
//     </Button>{" "}
//     &nbsp;
//     <Button type="button" lefttIcon="save" intent="success">
//       Success Active
//     </Button>
//     &nbsp;
//     <Button type="button" lefttIcon="save" intent="danger">
//       Danger Active
//     </Button>
//     &nbsp;
//     <Button type="button" lefttIcon="save" intent="warning">
//       Warning Active
//     </Button>
//   </div>
// );
// export const RightIcon = () => (
//   <div>
//     <Button type="button" rightIcon="save" intent="primary">
//       Primary Active
//     </Button>{" "}
//     &nbsp;
//     <Button type="button" rightIcon="save" intent="success">
//       Success Active
//     </Button>
//     &nbsp;
//     <Button type="button" rightIcon="save" intent="danger">
//       Danger Active
//     </Button>
//     &nbsp;
//     <Button type="button" rightIcon="save" intent="warning">
//       Warning Active
//     </Button>
//   </div>
// );
// export const Loading = () => (
//   <div>
//     <Button type="button" loading rightIcon="save" intent="primary">
//       Primary Active
//     </Button>{" "}
//     &nbsp;
//     <Button type="button" loading rightIcon="save" intent="success">
//       Success Active
//     </Button>
//     &nbsp;
//     <Button type="button" loading rightIcon="save" intent="danger">
//       Danger Active
//     </Button>
//     &nbsp;
//     <Button type="button" loading rightIcon="save" intent="warning">
//       Warning Active
//     </Button>
//   </div>
// );
