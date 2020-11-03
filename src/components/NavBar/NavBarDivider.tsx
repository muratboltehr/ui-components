import React from "react";
import { NavBarDividerProps } from "./NavBar.types";
import { AbstractPureComponent2, Classes } from "../../common";
import classNames from "classnames";
import NavBar from "./NavBar";

/**
 * This class creates a divider to use in the nav bar
 * and is customizable with the addition of html attributes
 */
export class NavBarDivider extends AbstractPureComponent2<NavBarDividerProps> {
  public render() {
    const { className, ...htmlProps } = this.props;
    return (
      <div
        className={classNames(Classes.NAVBAR_DIVIDER, className)}
        {...htmlProps}
      />
    );
  }
}

export default NavBarDivider;
