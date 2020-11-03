import React,{ButtonHTMLAttributes} from "react";
// import { IButtonState } from "./Button.types";
import { AbstractButton } from "./AbstractButton";
import {
  DISPLAYNAME_PREFIX,
  IRefObject,
  isRefObject,
  IRefCallback,
  removeNonHTMLProps,
} from "../../common";



export class Button extends AbstractButton<
  ButtonHTMLAttributes<HTMLButtonElement>
> {
  public static displayName = `${DISPLAYNAME_PREFIX}.Button`;

  protected buttonRef: HTMLButtonElement | IRefObject<HTMLButtonElement>;

  protected handleRef = isRefObject<HTMLButtonElement>(this.props.elementRef)
    ? (this.buttonRef = this.props.elementRef)
    : (ref: HTMLButtonElement) => {
        this.buttonRef = ref;
        (this.props.elementRef as IRefCallback)?.(ref);
      };

  public render() {
    // debugger;
    return (
      <button
        type="button"
        ref={this.handleRef}
        {...removeNonHTMLProps(this.props)}
        {...this.getCommonButtonProps()}
      >
        {this.renderChildren()}
      </button>
    );
  }
}

export default Button;
