// Generated with util/create-component.js
import React from "react";

import { SwitchProps, InternalControlProps } from "./Switch.types";

import "./Switch.scss";
import { Classes, AbstractPureComponent2 } from "../../common";
import classNames from "classnames";

const Control: React.FunctionComponent<InternalControlProps> = ({
  alignIndicator,
  children,
  className,
  indicatorChildren,
  switchInline,
  inputRef,
  label,
  labelElement,
  largeStyle,
  style,
  type,
  controlTypeClassName,
  tagName = "label",
  ...htmlProps
}) => {
  const classes = classNames(
    Classes.CONTROL,
    controlTypeClassName,
    {
      [Classes.DISABLED]: htmlProps.disabled,
      [Classes.INLINE]: switchInline,
      [Classes.LARGE]: largeStyle,
    },
    Classes.alignmentClass(alignIndicator),
    className
  );

  return React.createElement(
    tagName,
    { className: classes, style },
    <input {...htmlProps} ref={inputRef} type={type} />,
    <span className={Classes.CONTROL_INDICATOR}>{indicatorChildren}</span>,
    label,
    labelElement,
    children
  );
};

export class Switch extends AbstractPureComponent2<SwitchProps> {
  public render() {
    const {
      innerLabelWhenChecked,
      unCheckedInnerLabel,
      ...controlProps
    } = this.props;
    const switchLabels =
      unCheckedInnerLabel || innerLabelWhenChecked
        ? [
            <div key="checked" className={Classes.CONTROL_INDICATOR_CHILD}>
              <div className={Classes.SWITCH_INNER_TEXT}>
                {innerLabelWhenChecked
                  ? innerLabelWhenChecked
                  : unCheckedInnerLabel}
              </div>
            </div>,
            <div key="unchecked" className={Classes.CONTROL_INDICATOR_CHILD}>
              <div className={Classes.SWITCH_INNER_TEXT}>
                {unCheckedInnerLabel}
              </div>
            </div>,
          ]
        : null;
    return (
      <Control
        {...controlProps}
        type="checkbox"
        controlTypeClassName={Classes.SWITCH}
        indicatorChildren={switchLabels}
      />
    );
  }
}

export default Switch;
