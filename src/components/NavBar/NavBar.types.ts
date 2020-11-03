import { HTMLDivProps, IProps, Alignment } from "../../common";

export interface NavBarDividerProps extends HTMLDivProps, IProps {}

export interface NavBarGroupProps extends HTMLDivProps, IProps {
  /**
   * Align contents of the navbar with the following options:
   * Center,Left and Right
   */
  align?: Alignment;
}

export interface NavBarHeaderProps extends HTMLDivProps, IProps {}

export interface NavBarProps extends HTMLDivProps, IProps {
  fixedToTop: boolean;
}
