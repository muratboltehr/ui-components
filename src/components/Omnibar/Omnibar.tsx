// Generated with util/create-component.js
import React from "react";

import { OmnibarProps } from "./Omnibar.types";

import "./Omnibar.scss";


export class Omnibar extends React.Component<OmnibarProps> {
  render() {
    return (
      <div data-testid="Omnibar" className="foo-bar">{this.props.foo}</div>
    );
  }
}

export default Omnibar;

