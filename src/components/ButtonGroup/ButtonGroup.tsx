// Merge
// Generated with util/create-component.js
import React,{Component} from "react";
import classNames from "classnames";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { DISPLAYNAME_PREFIX, Classes, Utils } from "../../common";
import "./ButtonGroup.scss";

export class ButtonGroup extends Component<ButtonGroupProps> {
  render() {
    const { fill, large, minimal, vertical, className } = this.props;

    const _buttonGroupClasses = classNames(
      Classes.BUTTON_GROUP,
      {
        [Classes.FILL]: fill,
        [Classes.LARGE]: large,
        [Classes.MINIMAL]: minimal,
        [Classes.VERTICAL]: vertical,
      },

      className
    );
    return <div className={_buttonGroupClasses}>{this.props.children}</div>;
  }
}

export default ButtonGroup;
