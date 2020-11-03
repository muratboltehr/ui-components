import React from "react";
import Icon from "./Icon";
export default {
  title: "Foundations/Icon",
};

export const MyIcon = () => (
  <div>
    <Icon intent="primary" iconSize={20} icon="save"></Icon>
    {/* <Icon intent="primary" iconSize={30} icon="trash"></Icon> */}
  </div>
);
