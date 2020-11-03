import { Component } from "react";
import { NavBarProps } from "./NavBar.types";
import { NavBarHeader } from "./NavBarHeader";
import { NavBarGroup } from "./NavBarGroup";
import { NavBarDivider } from "./NavBarDivider";
import "./NavBar.scss";
/**
 * This class creates the main navbar component with the help
 * of three other components, divider, header and group.
 * Each of the above contents help store and organise children
 * inside the navbar. All of the following are customizable with
 * html attributes i.e buttons can also be added to the navbar.
 */
export declare class NavBar extends Component<NavBarProps> {
    static Divider: typeof NavBarDivider;
    static Header: typeof NavBarHeader;
    static Group: typeof NavBarGroup;
    render(): JSX.Element;
}
export default NavBar;
