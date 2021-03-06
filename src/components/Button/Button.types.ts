import { IActionProps, Alignment, IRef, MaybeElement } from "../../common";
import { IconName } from "../Icon/IconName";

export interface IButtonProps extends IActionProps {
  /**
   * If set to `true`, the button will display in an active state.
   * This is equivalent to setting `className={Classes.ACTIVE}`.
   * @default false
   */
  active?: boolean;

  /**
   * Text alignment within button. By default, icons and text will be centered
   * within the button. Passing `"left"` or `"right"` will align the button
   * text to that side and push `icon` and `rightIcon` to either edge. Passing
   * `"center"` will center the text and icons together.
   * @default Alignment.CENTER
   */
  alignText?: Alignment;

  /** A ref handler or a ref object that receives the native HTML element backing this component. */
  elementRef?: IRef<any>;

  /** Whether this button should expand to fill its container. */
  fill?: boolean;

  /** Whether this button should use large styles. */
  large?: boolean;

  /**
   * If set to `true`, the button will display a centered loading spinner instead of its contents.
   * The width of the button is not affected by the value of this prop.
   * @default false
   */
  loading?: boolean;

  /** Whether this button should use minimal styles. */
  minimal?: boolean;

  /** Whether this button should use outlined styles. */
  outlined?: boolean;

  /** Name of a Blueprint UI icon (or an icon element) to render after the text. */
  lefttIcon?: IconName | MaybeElement;
  rightIcon?: IconName | MaybeElement;
  icon?: IconName | MaybeElement;

  /** Whether this button should use small styles. */
  small?: boolean;

  /**
   * HTML `type` attribute of button. Accepted values are `"button"`, `"submit"`, and `"reset"`.
   * Note that this prop has no effect on `AnchorButton`; it only affects `Button`.
   * @default "button"
   */
  type?: "submit" | "reset" | "button";
}

export interface IButtonState {
  isActive: boolean;
}
