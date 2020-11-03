// Generated with util/create-component.js
import React from "react";

import { QueryListProps } from "./QueryList.types";

import "./QueryList.scss";


export class QueryList extends React.Component<QueryListProps> {
  render() {
    return (
      <div data-testid="QueryList" className="foo-bar">{this.props.foo}</div>
    );
  }
}

export default QueryList;

