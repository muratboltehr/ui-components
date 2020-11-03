// Generated with util/create-component.js
import React from "react";

import { OverlayProps as IOverlayProps, OverlayState as IOverlayState} from "./Overlay.types";

import "./Overlay.scss";
import { AbstractPureComponent2, Classes, Keys } from "../../common";
import { safeInvoke } from "../../common/utils/functionUtils";
import { DISPLAYNAME_PREFIX, IProps } from "../../common/props";

import { findDOMNode } from "react-dom";
import classNames from "classnames";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import { Portal } from "../Portal/Portal";

export class Overlay extends AbstractPureComponent2<IOverlayProps, IOverlayState> {
  public static displayName = `${DISPLAYNAME_PREFIX}.Overlay`;

  public static defaultProps: IOverlayProps = {
      autoFocus: true,
      backdropProps: {},
      canEscapeKeyClose: true,
      canOutsideClickClose: true,
      enforceFocus: true,
      hasBackdrop: true,
      isOpen: false,
      lazy: true,
      transitionDuration: 300,
      transitionName: Classes.OVERLAY,
      usePortal: true,
  };

  public static getDerivedStateFromProps({ isOpen: hasEverOpened }: IOverlayProps) {
      if (hasEverOpened) {
          return { hasEverOpened };
      }
      return null;
  }

  private static openStack: Overlay[] = [];
  private static getLastOpened = () => Overlay.openStack[Overlay.openStack.length - 1];

  // an HTMLElement that contains the backdrop and any children, to query for focus target
  public containerElement: HTMLElement;
  private refHandlers = {
      container: (ref: React.ReactInstance) => (this.containerElement = findDOMNode(ref) as HTMLElement),
  };

  public constructor(props?: IOverlayProps, context?: any) {
      super(props, context);
      this.state = { hasEverOpened: props.isOpen };
  }

  public render() {
      // oh snap! no reason to render anything at all if we're being truly lazy
      if (this.props.lazy && !this.state.hasEverOpened) {
          return null;
      }

      const { children, className, usePortal, isOpen } = this.props;

      // TransitionGroup types require single array of children; does not support nested arrays.
      // So we must collapse backdrop and children into one array, and every item must be wrapped in a
      // Transition element (no ReactText allowed).
      const childrenWithTransitions = (isOpen ? React.Children.map(children, this.maybeRenderChild) : []);
      childrenWithTransitions.unshift(this.maybeRenderBackdrop());

      const containerClasses = classNames(
          Classes.OVERLAY,
          {
              [Classes.OVERLAY_OPEN]: isOpen,
              [Classes.OVERLAY_INLINE]: !usePortal,
          },
          className,
      );

      const transitionGroup = (
          <TransitionGroup
              appear={true}
              className={containerClasses}
              component="div"
              onKeyDown={this.handleKeyDown}
              ref={this.refHandlers.container}
          >
              {childrenWithTransitions}
          </TransitionGroup>
      );
      if (usePortal) {
          return (
              <Portal className={this.props.portalClassName} container={this.props.portalContainer}>
                  {transitionGroup}
              </Portal>
          );
      } else {
          return transitionGroup;
      }
  }

  public componentDidMount() {
      if (this.props.isOpen) {
          this.overlayWillOpen();
      }
  }

  public componentDidUpdate(prevProps: IOverlayProps) {
      if (prevProps.isOpen && !this.props.isOpen) {
          this.overlayWillClose();
      } else if (!prevProps.isOpen && this.props.isOpen) {
          this.overlayWillOpen();
      }
  }

  public componentWillUnmount() {
      this.overlayWillClose();
  }

  /**
   * @public for testing
   * @internal
   */
  public bringFocusInsideOverlay() {
      // always delay focus manipulation to just before repaint to prevent scroll jumping
      return requestAnimationFrame(() => {
          // container ref may be undefined between component mounting and Portal rendering
          // activeElement may be undefined in some rare cases in IE
          if (this.containerElement == null || document.activeElement == null || !this.props.isOpen) {
              return;
          }

          const isFocusOutsideModal = !this.containerElement.contains(document.activeElement);
          if (isFocusOutsideModal) {
              // element marked autofocus has higher priority than the other clowns
              const autofocusElement = this.containerElement.querySelector("[autofocus]") as HTMLElement;
              const wrapperElement = this.containerElement.querySelector("[tabindex]") as HTMLElement;
              if (autofocusElement != null) {
                  autofocusElement.focus();
              } else if (wrapperElement != null) {
                  wrapperElement.focus();
              }
          }
      });
  }

  private maybeRenderChild = (child?: React.ReactChild) => {
      if (child == null) {
          return null;
      }
      // add a special class to each child element that will automatically set the appropriate
      // CSS position mode under the hood. also, make the container focusable so we can
      // trap focus inside it (via `enforceFocus`).
      const decoratedChild =
         typeof child === "object" ? (
              React.cloneElement(child, {
                  className: classNames(child.props.className, Classes.OVERLAY_CONTENT),
                  tabIndex: 0,
              
            })
          ) : (
              <span className={Classes.OVERLAY_CONTENT}>{child}</span>
          );
      const { onOpening, onOpened, onClosing, onClosed, transitionDuration, transitionName } = this.props;

      // a breaking change in react-transition-group types requires us to be explicit about the type overload here,
      // using a technique similar to Select.ofType() in @blueprintjs/select
      const CSSTransitionImplicit = CSSTransition as new (props: CSSTransitionProps<undefined>) => CSSTransition<
          undefined
      >;

      return (
          <CSSTransitionImplicit
              classNames={transitionName}
              onEntering={onOpening}
              onEntered={onOpened}
              onExiting={onClosing}
              onExited={onClosed}
              timeout={transitionDuration}
          >
              {decoratedChild}
          </CSSTransitionImplicit>
      );
  };

  private maybeRenderBackdrop() {
      const {
          backdropClassName,
          backdropProps,
          hasBackdrop,
          isOpen,
          transitionDuration,
          transitionName,
      } = this.props;

      if (hasBackdrop && isOpen) {
          return (
              <CSSTransition classNames={transitionName} key="__backdrop" timeout={transitionDuration}>
                  <div
                      {...backdropProps}
                      className={classNames(Classes.OVERLAY_BACKDROP, backdropClassName, backdropProps.className)}
                      onMouseDown={this.handleBackdropMouseDown}
                      tabIndex={this.props.canOutsideClickClose ? 0 : null}
                  />
              </CSSTransition>
          );
      } else {
          return null;
      }
  }

  private overlayWillClose() {
      document.removeEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
      document.removeEventListener("mousedown", this.handleDocumentClick);

      const { openStack } = Overlay;
      const stackIndex = openStack.indexOf(this);
      if (stackIndex !== -1) {
          openStack.splice(stackIndex, 1);
          if (openStack.length > 0) {
              const lastOpenedOverlay = Overlay.getLastOpened();
              if (lastOpenedOverlay.props.enforceFocus) {
                  document.addEventListener("focus", lastOpenedOverlay.handleDocumentFocus, /* useCapture */ true);
              }
          }

          if (openStack.filter(o => o.props.usePortal && o.props.hasBackdrop).length === 0) {
              document.body.classList.remove(Classes.OVERLAY_OPEN);
          }
      }
  }

  private overlayWillOpen() {
      const { openStack } = Overlay;
      if (openStack.length > 0) {
          document.removeEventListener("focus", Overlay.getLastOpened().handleDocumentFocus, /* useCapture */ true);
      }
      openStack.push(this);

      if (this.props.autoFocus) {
          this.bringFocusInsideOverlay();
      }
      if (this.props.enforceFocus) {
          document.addEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
      }

      if (this.props.canOutsideClickClose && !this.props.hasBackdrop) {
          document.addEventListener("mousedown", this.handleDocumentClick);
      }

      if (this.props.hasBackdrop && this.props.usePortal) {
          // add a class to the body to prevent scrolling of content below the overlay
          document.body.classList.add(Classes.OVERLAY_OPEN);
      }
  }

  private handleBackdropMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      const { backdropProps, canOutsideClickClose, enforceFocus, onClose } = this.props;
      if (canOutsideClickClose) {
        onClose?.(e);
      }
      if (enforceFocus) {
          // make sure document.activeElement is updated before bringing the focus back
          this.bringFocusInsideOverlay();
      }
      safeInvoke(backdropProps.onMouseDown, e);
  };

  private handleDocumentClick = (e: MouseEvent) => {
      const { canOutsideClickClose, isOpen, onClose } = this.props;
      // get the actually target even if we are in an open mode Shadow DOM
      const eventTarget = (e.composed ? e.composedPath()[0] : e.target) as HTMLElement;

      const stackIndex = Overlay.openStack.indexOf(this);
      const isClickInThisOverlayOrDescendant = Overlay.openStack
          .slice(stackIndex)
          .some(({ containerElement: elem }) => {
              // `elem` is the container of backdrop & content, so clicking on that container
              // should not count as being "inside" the overlay.
              return elem && elem.contains(eventTarget) && !elem.isSameNode(eventTarget);
          });

      if (isOpen && canOutsideClickClose && !isClickInThisOverlayOrDescendant) {
          // casting to any because this is a native event
          safeInvoke(onClose, e as any);
      }
  };

  private handleDocumentFocus = (e: FocusEvent) => {
      // get the actually target even if we are in an open mode Shadow DOM
      const eventTarget = e.composed ? e.composedPath()[0] : e.target;
      if (
          this.props.enforceFocus &&
          this.containerElement != null &&
          eventTarget instanceof Node &&
          !this.containerElement.contains(eventTarget as HTMLElement)
      ) {
          // prevent default focus behavior (sometimes auto-scrolls the page)
          e.preventDefault();
          e.stopImmediatePropagation();
          this.bringFocusInsideOverlay();
      }
  };

  private handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      const { canEscapeKeyClose, onClose } = this.props;
      if (e.which === Keys.ESCAPE && canEscapeKeyClose) {
          safeInvoke(onClose, e);
          // prevent browser-specific escape key behavior (Safari exits fullscreen)
          e.preventDefault();
      }
  };
}

export default Overlay;