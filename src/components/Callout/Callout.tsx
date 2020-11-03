// Generated with util/create-component.js
import React, { Component } from "react";
import classNames from "classnames";
import { CalloutProps } from "./Callout.types";
import { Classes } from "../../common";
import Icon from "../Icon/Icon";

import "./Callout.scss";

export class Callout extends Component<CalloutProps> {
  render() {
    const { intent, heading, iconName } = this.props;

    const _className = classNames(Classes.CALLOUT, Classes.intentClass(intent));
    console.log(iconName);
    return (
      <div className={_className}>
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: 5 }}>
            {iconName && (
              <Icon
                className={Classes.CALLOUT_ICON}
                icon={iconName}
                iconSize={20}
              ></Icon>
            )}{" "}
            &nbsp;
          </div>
          <br></br>
          <br />
          <div>
            {heading && (
              <div className={Classes.HEADING}>{heading}</div>
            )}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Callout;
