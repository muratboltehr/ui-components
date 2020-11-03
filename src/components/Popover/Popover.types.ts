import {
  Boundary as PopperBoundary,
  Modifiers as PopperModifiers,
} from "popper.js";
import { OverlayOptionProps } from "../Overlay/Overlay.types";
import { IProps } from "../../common";
import { Position } from "../../common/enums";
import { PopperArrowProps } from "react-popper";
import { Placement } from "@popperjs/core";
import { HTMLProps } from "react";

//uncommented the below line as it causing compilation error, check if it is needed
 export { PopperBoundary, PopperModifiers };

export const PopoverPosition = {
  ...Position,
  AUTO: "auto" as "auto",
  AUTO_START: "auto-start" as "auto-start",
  AUTO_END: "auto-end" as "auto-end",
};

export type PopoverPosition = typeof PopoverPosition[keyof typeof PopoverPosition];

export const PopoverInteractionType = {
  CLICK: "click" as "click",
  TARGET_CLICK: "click-target" as "click-target",
  HOVER: "hover" as "hover",
  TARGET_HOVER: "hover-target" as "hover-target",
  HOVER_TARGET_ONLY: "hover-target" as "hover-target",

};
export type PopoverInteractionType = typeof PopoverInteractionType[keyof typeof PopoverInteractionType];

export interface PopoverSharedProps extends IProps, OverlayOptionProps {
  boundary?: PopperBoundary;
  isOpenDefault?: boolean;
  disabled?: boolean;
  hoverCloseDelay?: number;
  hoverOpenDelay?: number;
  isOpen?: boolean;
  modifiers?: PopperModifiers;
  openOnTargetFocus?: boolean;
  popoverClassName?: string;
  position?: PopoverPosition;
  targetClassName?: string;
  targetProps?: React.HTMLAttributes<HTMLElement>;
  targetTagName?: keyof JSX.IntrinsicElements;
  usePortal?: boolean;
  wrapperTagName?: keyof JSX.IntrinsicElements;
  captureDismiss?: boolean;
  onInteraction?: (
    nextOpenState: boolean,
    event?: React.SyntheticEvent<HTMLElement>
  ) => void;
  inheritDarkTheme?: boolean;
}

export interface PopoverProps extends PopoverSharedProps {
  content?: JSX.Element | string;
  hasBackdrop?: boolean;
  interactionType?: PopoverInteractionType;
  fillContainer?: boolean;
  backdropProps?: React.HTMLProps<HTMLDivElement>;
  minimalStyle?: boolean;
  target?: string | JSX.Element;
  popoverRef?: (ref: HTMLDivElement | null) => void;
  fill?: boolean;
   /**
     * The kind of interaction that triggers the display of the popover.
     * @default PopoverInteractionKind.CLICK
     */
    minimal?: boolean;
  



}

export interface IPopoverArrowProps {
  arrowProps: PopperArrowProps;
  placement: Placement;
}

export interface PopoverState {
  transformOrigin: string;
  isOpen: boolean;
  hasDarkParent: boolean;
}
