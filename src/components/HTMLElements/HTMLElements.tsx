// Generated with util/create-component.js
import React from "react";

import { HTMLElementsProps } from "./HTMLElements.types";

import "./HTMLElements.scss";


export class HTMLElements extends React.Component<HTMLElementsProps> {
  render() {
    return (
      <div data-testid="HTMLElements" className="foo-bar">{this.props.foo}</div>
    );
  }
}

export default HTMLElements;

