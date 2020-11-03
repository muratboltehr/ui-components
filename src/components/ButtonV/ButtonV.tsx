// Generated with util/create-component.js
import React from "react";
import { ButtonVProps } from "./ButtonV.types";
import classNames from "classnames";
import { DISPLAYNAME_PREFIX, Classes, Utils } from "../../common";
import Spinner from "../Spinner/Spinner";
import { Icon } from "../..";
import "./ButtonV.scss";

//gets unique name for our css class-names
const PREFIX = DISPLAYNAME_PREFIX;

export class ButtonV extends React.Component<ButtonVProps, {}> {
  render() {
    const {
      active,
      disabled,
      fill,
      size = "medium",
      loading,
      minimal,
      outlined,
      intent,
      type = "button",
      onClick,
      text,
      children,
      leftIcon,
      rightIcon,
      className,
    } = this.props;

    const _classNames = classNames(
      Classes.BUTTON,
      {
        [Classes.ACTIVE]: active,
        [Classes.DISABLED]: disabled,
        [Classes.FILL]: fill,
        [Classes.LOADING]: loading,
        [Classes.MINIMAL]: minimal,
        [Classes.OUTLINED]: outlined,
      },
      Classes.intentClass(intent),
      Classes.buttonSize(size),
      className
    );

    return (
      <button
        type={type}
        className={_classNames}
        onClick={disabled ? undefined : onClick}
      >
        {loading && (
          <Spinner
            key="loading"
            size="small"
            className={Classes.BUTTON_SPINNER}
          />
        )}
        {leftIcon && <Icon key="leftIcon" icon="save" />}
        {(!Utils.isReactNodeEmpty(text) ||
          !Utils.isReactNodeEmpty(children)) && (
          <span key="text" className={Classes.BUTTON_TEXT}>
            {text}
            {children}
          </span>
        )}
        {rightIcon && <Icon key="rightIcon" icon="save" />}
      </button>
    );
  }
}

export default ButtonV;

