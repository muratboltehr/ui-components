import React,{Component} from "react";
import { NavBarProps } from "./NavBar.types";
import { NavBarHeader } from "./NavBarHeader";
import { NavBarGroup } from "./NavBarGroup";
import { NavBarDivider } from "./NavBarDivider";
import { Classes } from "../../common";
import classNames from "classnames";
import "./NavBar.scss";

/**
 * This class creates the main navbar component with the help
 * of three other components, divider, header and group.
 * Each of the above contents help store and organise children
 * inside the navbar. All of the following are customizable with
 * html attributes i.e buttons can also be added to the navbar.
 */

export class NavBar extends Component<NavBarProps> {
  public static Divider = NavBarDivider;
  public static Header = NavBarHeader;
  public static Group = NavBarGroup;

  render() {
    const { className, fixedToTop, children, ...htmlProps } = this.props;
    const _classnames = classNames(Classes.NAVBAR, className, {
      [Classes.FIXED_TO_TOP]: fixedToTop,
    });

    return (
      <div className={_classnames} {...htmlProps}>
        {children}
      </div>
    );
  }
}

export default NavBar;
