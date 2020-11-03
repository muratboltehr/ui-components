// Generated with util/create-component.js
import React from "react";
import ReactDOM from "react-dom";
// import { isFunction } from "../../common/utils";
import { Classes } from "../../common";

import { PortalProps, PortalState } from "./Portal.types";

import "./Portal.scss";

export function isFunction(value: any) {
  return typeof value === "function";
}

const cannotCreatePortal = !isFunction(ReactDOM.createPortal);
export class Portal extends React.Component<PortalProps, PortalState> {
  public static defaultProps: PortalProps = {
    container: typeof document !== "undefined" ? document.body : null,
  };

  // public context: PortalContext;
  public state: PortalState = { portalMounted: false };

  private portalElement: HTMLElement;

  public render() {
    // Only render `children` once this component has mounted in a browser environment, so they are
    // immediately attached to the DOM tree and can do DOM things like measuring or `autoFocus`.
    // See long comment on componentDidMount in https://reactjs.org/docs/portals.html#event-bubbling-through-portals
    if (
      cannotCreatePortal ||
      typeof document === "undefined" ||
      !this.state.portalMounted
    ) {
      return null;
    } else {
      return ReactDOM.createPortal(this.props.children, this.portalElement);
    }
  }

  public componentDidMount() {
    if (!this.props.container) {
      return;
    }
    this.portalElement = this.createContainerElement();
    this.props.container.appendChild(this.portalElement);
    this.setState({ portalMounted: true }, this.props.childrenMountedCallback);
    if (cannotCreatePortal) {
      this.unstableRenderNoPortal();
    }
  }

  public componentDidUpdate(prevProps: PortalProps) {
    // update className prop on portal DOM element
    if (
      this.portalElement != null &&
      prevProps.className !== this.props.className
    ) {
      this.portalElement.classList.remove(prevProps.className);
      maybeAddClass(this.portalElement.classList, this.props.className);
    }
    if (cannotCreatePortal) {
      this.unstableRenderNoPortal();
    }
  }

  public componentWillUnmount() {
    if (this.portalElement != null) {
      if (cannotCreatePortal) {
        ReactDOM.unmountComponentAtNode(this.portalElement);
      }
      this.portalElement.remove();
    }
  }

  private createContainerElement() {
    const container = document.createElement("div");
    container.classList.add(Classes.PORTAL);
    maybeAddClass(container.classList, this.props.className);
    if (this.context != null) {
      maybeAddClass(container.classList, this.context.customPortalClassName);
    }
    return container;
  }

  private unstableRenderNoPortal() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      <div>{this.props.children}</div>,
      this.portalElement
    );
  }
}

function maybeAddClass(classList: DOMTokenList, className?: string) {
  if (className != null && className !== "") {
    classList.add(...className.split(" "));
  }
}

export default Portal;
