import {
  PopoverSharedProps,
  PopoverInteractionType,
} from "../Popover/Popover.types";
import { IIntentProps } from "../../common";

// Generated with util/create-component.js

export interface TooltipProps extends PopoverSharedProps, IIntentProps {
  content: JSX.Element | string;

  interactionKind?:
    | typeof PopoverInteractionType.HOVER
    | typeof PopoverInteractionType.TARGET_HOVER;

  /**
   * Indicates how long (in milliseconds) the tooltip's appear/disappear
   * transition takes. This is used by React `CSSTransition` to know when a
   * transition completes and must match the duration of the animation in CSS.
   * Only set this prop if you override Blueprint's default transitions with
   * new transitions of a different length.
   * @default 100
   */
  placement :"top" | "bottom"|
  'top-start' |
  'top-end'|
  'right'|
  'right-start'|
  'right-end'|
  'bottom'|
  'bottom-start'|
  'bottom-end' |
  'left'|
    'left-start'|
    'left-end'

}
