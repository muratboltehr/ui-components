import * as React from "react";

// import { IconName } from '@blueprintjs/icons';
import { Intent } from "./enums";

export const DISPLAYNAME_PREFIX = "Optum";

/**
 * Alias for all valid HTML props for `<div>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Alias for all valid HTML props for `<input>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Alias for a `JSX.Element` or a value that renders nothing.
 *
 * In React, `boolean`, `null`, and `undefined` do not produce any output.
 */
export type MaybeElement = JSX.Element | false | null | undefined;

/**
 * A shared base interface for all Blueprint component props.
 */
export interface IProps {
  /** A space-delimited list of class names to pass along to a child element. */
  className?: string;
}

export interface IIntentProps {
  /** Visual intent color to apply to element. */
  intent?: Intent;
}

/**
 * Interface for a clickable action, such as a button or menu item.
 * These props can be spready directly to a `<Button>` or `<MenuItem>` element.
 */
export interface IActionProps extends IIntentProps, IProps {
  /** Whether this action is non-interactive. */
  disabled?: boolean;

  //   /** Name of a Blueprint UI icon (or an icon element) to render before the text. */
  //   icon?: IconName | MaybeElement;

  /** Click event handler. */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;

  /** Action text. Can be any single React renderable. */
  text?: React.ReactNode;
}

/** Interface for a link, with support for customizing target window. */
export interface ILinkProps {
  /** Link URL. */
  href?: string;

  /** Link target attribute. Use `"_blank"` to open in a new window. */
  target?: string;
}

/** Interface for a controlled input. */
export interface IControlledProps {
  /** Initial value of the input, for uncontrolled usage. */
  defaultValue?: string;

  /** Change event handler. Use `event.target.value` for new value. */
  onChange?: React.FormEventHandler<HTMLElement>;

  /** Form value of the input, for controlled usage. */
  value?: string;
}

/**
 * An interface for an option in a list, such as in a `<select>` or `RadioGroup`.
 * These props can be spread directly to an `<option>` or `<Radio>` element.
 */
export interface IOptionProps extends IProps {
  /** Whether this option is non-interactive. */
  disabled?: boolean;

  /** Label text for this option. If omitted, `value` is used as the label. */
  label?: string;

  /** Value of this option. */
  value: string | number;
}

/** A collection of curated prop keys used across our Components which are not valid HTMLElement props. */
const INVALID_PROPS = [
  "active",
  "alignText",
  "containerRef",
  "current",
  "elementRef",
  "fill",
  "icon",
  "inputRef",
  "intent",
  "inline",
  "large",
  "loading",
  "leftElement",
  "leftIcon",
  "minimal",
  "onRemove", // ITagProps, ITagInputProps
  "outlined", // IButtonProps
  "panel", // ITabProps
  "panelClassName", // ITabProps
  "popoverProps",
  "rightElement",
  "rightIcon",
  "round",
  "small",
  "text",
];

/**
 * Typically applied to HTMLElements to filter out blacklisted props. When applied to a Component,
 * can filter props from being passed down to the children. Can also filter by a combined list of
 * supplied prop keys and the blacklist (only appropriate for HTMLElements).
 * @param props The original props object to filter down.
 * @param {string[]} invalidProps If supplied, overwrites the default blacklist.
 * @param {boolean} shouldMerge If true, will merge supplied invalidProps and blacklist together.
 */
export function removeNonHTMLProps(
  props: { [key: string]: any },
  invalidProps = INVALID_PROPS,
  shouldMerge = false
): { [key: string]: any } {
  if (shouldMerge) {
    invalidProps = invalidProps.concat(INVALID_PROPS);
  }

  return invalidProps.reduce(
    (prev, curr) => {
      if (prev.hasOwnProperty(curr)) {
        delete (prev as any)[curr];
      }
      return prev;
    },
    { ...props }
  );
}

export interface IOverlayableProps extends IOverlayLifecycleProps {
  /**
   * Whether the overlay should acquire application focus when it first opens.
   * @default true
   */
  autoFocus?: boolean;

  /**
   * Whether pressing the `esc` key should invoke `onClose`.
   * @default true
   */
  canEscapeKeyClose?: boolean;

  /**
   * Whether the overlay should prevent focus from leaving itself. That is, if the user attempts
   * to focus an element outside the overlay and this prop is enabled, then the overlay will
   * immediately bring focus back to itself. If you are nesting overlay components, either disable
   * this prop on the "outermost" overlays or mark the nested ones `usePortal={false}`.
   * @default true
   */
  enforceFocus?: boolean;

  /**
   * If `true` and `usePortal={true}`, the `Portal` containing the children is created and attached
   * to the DOM when the overlay is opened for the first time; otherwise this happens when the
   * component mounts. Lazy mounting provides noticeable performance improvements if you have lots
   * of overlays at once, such as on each row of a table.
   * @default true
   */
  lazy?: boolean;

  /**
   * Indicates how long (in milliseconds) the overlay's enter/leave transition takes.
   * This is used by React `CSSTransition` to know when a transition completes and must match
   * the duration of the animation in CSS. Only set this prop if you override Blueprint's default
   * transitions with new transitions of a different length.
   * @default 300
   */
  transitionDuration?: number;

  /**
   * Whether the overlay should be wrapped in a `Portal`, which renders its contents in a new
   * element attached to `portalContainer` prop.
   *
   * This prop essentially determines which element is covered by the backdrop: if `false`,
   * then only its parent is covered; otherwise, the entire page is covered (because the parent
   * of the `Portal` is the `<body>` itself).
   *
   * Set this prop to `false` on nested overlays (such as `Dialog` or `Popover`) to ensure that they
   * are rendered above their parents.
   * @default true
   */
  usePortal?: boolean;

  /**
   * Space-delimited string of class names applied to the `Portal` element if
   * `usePortal={true}`.
   */
  portalClassName?: string;

  /**
   * The container element into which the overlay renders its contents, when `usePortal` is `true`.
   * This prop is ignored if `usePortal` is `false`.
   * @default document.body
   */
  portalContainer?: HTMLElement;

  /**
   * A callback that is invoked when user interaction causes the overlay to close, such as
   * clicking on the overlay or pressing the `esc` key (if enabled).
   *
   * Receives the event from the user's interaction, if there was an event (generally either a
   * mouse or key event). Note that, since this component is controlled by the `isOpen` prop, it
   * will not actually close itself until that prop becomes `false`.
   */
  onClose?: (event?: React.SyntheticEvent<HTMLElement>) => void;
}

export interface IOverlayLifecycleProps {
  /**
   * Lifecycle method invoked just before the CSS _close_ transition begins on
   * a child. Receives the DOM element of the child being closed.
   */
  onClosing?: (node: HTMLElement) => void;

  /**
   * Lifecycle method invoked just after the CSS _close_ transition ends but
   * before the child has been removed from the DOM. Receives the DOM element
   * of the child being closed.
   */
  onClosed?: (node: HTMLElement) => void;

  /**
   * Lifecycle method invoked just after mounting the child in the DOM but
   * just before the CSS _open_ transition begins. Receives the DOM element of
   * the child being opened.
   */
  onOpening?: (node: HTMLElement) => void;

  /**
   * Lifecycle method invoked just after the CSS _open_ transition ends.
   * Receives the DOM element of the child being opened.
   */
  onOpened?: (node: HTMLElement) => void;
}

export interface IBackdropProps {
  /** CSS class names to apply to backdrop element. */
  backdropClassName?: string;

  /** HTML props for the backdrop element. */
  backdropProps?: React.HTMLProps<HTMLDivElement>;

  /**
   * Whether clicking outside the overlay element (either on backdrop when present or on document)
   * should invoke `onClose`.
   * @default true
   */
  canOutsideClickClose?: boolean;

  /**
   * Whether a container-spanning backdrop element should be rendered behind the contents.
   * @default true
   */
  hasBackdrop?: boolean;
}