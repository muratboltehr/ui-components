/// <reference types="react" />
import { Boundary as PopperBoundary, Modifiers as PopperModifiers } from "popper.js";
import { OverlayOptionProps } from "../Overlay/Overlay.types";
import { IProps } from "../../common";
import { PopperArrowProps } from "react-popper";
import { Placement } from "@popperjs/core";
export { PopperBoundary, PopperModifiers };
export declare const PopoverPosition: {
    AUTO: "auto";
    AUTO_START: "auto-start";
    AUTO_END: "auto-end";
    BOTTOM: "bottom";
    BOTTOM_LEFT: "bottom-left";
    BOTTOM_RIGHT: "bottom-right";
    LEFT: "left";
    LEFT_BOTTOM: "left-bottom";
    LEFT_TOP: "left-top";
    RIGHT: "right";
    RIGHT_BOTTOM: "right-bottom";
    RIGHT_TOP: "right-top";
    TOP: "top";
    TOP_LEFT: "top-left";
    TOP_RIGHT: "top-right";
};
export declare type PopoverPosition = typeof PopoverPosition[keyof typeof PopoverPosition];
export declare const PopoverInteractionType: {
    CLICK: "click";
    TARGET_CLICK: "click-target";
    HOVER: "hover";
    TARGET_HOVER: "hover-target";
    HOVER_TARGET_ONLY: "hover-target";
};
export declare type PopoverInteractionType = typeof PopoverInteractionType[keyof typeof PopoverInteractionType];
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
    onInteraction?: (nextOpenState: boolean, event?: React.SyntheticEvent<HTMLElement>) => void;
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
