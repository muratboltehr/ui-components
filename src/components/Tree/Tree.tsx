// Generated with util/create-component.js
import React from "react";

import { TreeProps } from "./Tree.types";

import "./Tree.scss";


export class Tree extends React.Component<TreeProps> {
  render() {
    return (
      <div data-testid="Tree" className="foo-bar">{this.props.foo}</div>
    );
  }
}

export default Tree;

