import { IProps } from "../../common";

// Generated with util/create-component.js
export interface OverlayOptionProps extends OverlayLifeCycleProps {
  canEscapeKeyClose?: boolean;
  enforceFocus?: boolean;
  animationTransitionDuration?: number;
  usePortal?: boolean;
  portalClassName?: string;
  lazy?: boolean;

  /**
   * @default document.body
   */
  portalContainer?: HTMLElement;
  autoFocus?: boolean;
  onClose?: (event?: React.SyntheticEvent<HTMLElement>) => void;
   /**
     * Indicates how long (in milliseconds) the overlay's enter/leave transition takes.
     * This is used by React `CSSTransition` to know when a transition completes and must match
     * the duration of the animation in CSS. Only set this prop if you override Blueprint's default
     * transitions with new transitions of a different length.
     * @default 300
     */
    transitionDuration?: number;

}

export interface OverlayLifeCycleProps {
  onOpening?: (node: HTMLElement) => void;
  onOpened?: (node: HTMLElement) => void;
  onClosing?: (node: HTMLElement) => void;
  onClosed?: (node: HTMLElement) => void;
}

export interface BackdropProps {
  hasBackdrop?: boolean;
  backdropClassName?: string;
  backdropProps?: React.HTMLProps<HTMLDivElement>;
  canOutsideClickClose?: boolean;


  propsHTMLForBackdrop?: React.HTMLProps<HTMLDivElement>;
}

export interface OverlayProps
  extends BackdropProps,
    OverlayOptionProps,
    IProps {
  isOpen?: boolean;
  transitionName?: string;
}

export interface OverlayState {
  hasEverOpened?: boolean;
}
