import { IButtonState, IButtonProps } from "./Button.types";
import {
  AbstractPureComponent2,
  IRefObject,
  Classes,
  Keys,
  Utils,
  getRef,
} from "../../common";
import classNames from "classnames";
import React,{HTMLAttributes} from "react";
import "./Button.scss";
import { Icon } from "../Icon/Icon";
import Spinner from "../Spinner/Spinner";
import { ICON } from "../Icon/Icon.types";

export abstract class AbstractButton<
  H extends HTMLAttributes<HTMLElement>
> extends AbstractPureComponent2<IButtonProps & H, IButtonState> {
  public state = { isActive: false };

  protected abstract buttonRef: HTMLElement | IRefObject<HTMLElement>;

  private currentKeyDown: number | null;

  public abstract render(): JSX.Element;
  protected getCommonButtonProps() {
    const {
      alignText,
      fill,
      large,
      loading,
      outlined,
      minimal,
      small,
    } = this.props;
    const disabled = this.props.disabled || loading;
    // const buttonClass = 'optum-button';
    // debugger;
    const className = classNames(
      Classes.BUTTON,
      {
        [Classes.ACTIVE]: this.state.isActive,
        [Classes.DISABLED]: disabled,
        [Classes.FILL]: fill,
        [Classes.LARGE]: large,
        [Classes.LOADING]: loading,
        [Classes.MINIMAL]: minimal,
        [Classes.OUTLINED]: outlined,
        [Classes.SMALL]: small,
      },
      Classes.alignmentClass(alignText),
      Classes.intentClass(this.props.intent),
      this.props.className
    );

    return {
      className,
      disabled,
      onClick: disabled ? undefined : this.props.onClick,
    };
  }

  protected handleKeyDown = (e: React.KeyboardEvent<any>) => {
    if (Keys.isKeyboardClick(e.which)) {
      e.preventDefault();
      if (e.which !== this.currentKeyDown) {
        this.setState({ isActive: true });
      }
    }
    this.currentKeyDown = e.which;
    this.props.onKeyDown?.(e);
  };

  protected handleKeyUp = (e: React.KeyboardEvent<any>) => {
    if (Keys.isKeyboardClick(e.which)) {
      this.setState({ isActive: false });
      console.log(this.buttonRef);
      const buttonRef = this.buttonRef;
      getRef(buttonRef).click();
    }
    this.currentKeyDown = null;
    this.props.onKeyUp?.(e);
  };

  protected renderChildren(): React.ReactNode {
    const { children, text, rightIcon, icon, lefttIcon, loading } = this.props;
    return [
      loading && (
        <Spinner
          key="loading"
          size={'small'}
          className={Classes.BUTTON_SPINNER}
        />
      ),
      <Icon key="leftIcon" icon={lefttIcon} />,
      (!Utils.isReactNodeEmpty(text) || !Utils.isReactNodeEmpty(children)) && (
        <span key="text" className={Classes.BUTTON_TEXT}>
          {text}
          {children}
        </span>
      ),
      <Icon key="rightIcon" icon={rightIcon} />,
    ];
  }
}
