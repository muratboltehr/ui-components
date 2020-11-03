import React from "react";
import { NavBarHeaderProps } from "./NavBar.types";
import { AbstractPureComponent2, Classes } from "../../common";
import classNames from "classnames";
import NavBar from "./NavBar";

/**
 * This class creates a component which is a comntainer for the
 * header of the navbar passed to it as a child
 */
export class NavBarHeader extends AbstractPureComponent2<NavBarHeaderProps> {
  render() {
    const { className, children, ...htmlProps } = this.props;
    return (
      <div
        className={classNames(Classes.NAVBAR_HEADER, className)}
        {...htmlProps}
      >
        {children}
      </div>
    );
  }
}

export default NavBarHeader;
