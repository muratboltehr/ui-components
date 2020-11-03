// Generated with util/create-component.js
import React from "react";

import { SkeletonProps } from "./Skeleton.types";

import "./Skeleton.scss";


export class Skeleton extends React.Component<SkeletonProps> {
  render() {
    return (
      <div data-testid="Skeleton" className="foo-bar">{this.props.foo}</div>
    );
  }
}

export default Skeleton;

