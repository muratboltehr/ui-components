import React from "react";
import { NavBarGroupProps } from "./NavBar.types";
import { AbstractPureComponent2, Classes } from "../../common";
import classNames from "classnames";

/**
 * This class creates a component which is a comntainer for any
 * children passed to it for the navbar
 */
export class NavBarGroup extends AbstractPureComponent2<NavBarGroupProps> {
  public render() {
    const { align, className, children, ...htmlProps } = this.props;

    const _classnames = classNames(
      Classes.NAVBAR_GROUP,
      className,
      Classes.alignmentClass(align)
    );

    return (
      <div className={_classnames} {...htmlProps}>
        {children}
      </div>
    );
  }
}

export default NavBarGroup;
