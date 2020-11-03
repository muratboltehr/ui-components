// Generated with util/create-component.js
import React from "react";
import Card from "../Card/Card";
import { Classes } from "../../common";
import "./Skeleton.scss";

import { boolean } from "@storybook/addon-knobs";
export default {
  title: "Foundations/Skeleton",
};

export const SkeletonWithKnobs = () => {
  var a = boolean("Enable Skeleton", false);
  if (a == true) {
    var _className = Classes.SKELETON;
  }
  return (
    <Card>
      <h2 className={_className}> Skeleton</h2>
      <p className={_className}>
        {" "}
        The Skeleton component can be used to show an animation while the
        content is loading.
        <br />
        You can use this very easily by including the class name of Skeleton
      </p>
    </Card>
  );
};
