// Generated with util/create-component.js
import React from "react";

import { ResizeSensorProps } from "./ResizeSensor.types";
import ResizeObserver from "resize-observer-polyfill";

import "./ResizeSensor.scss";
import { AbstractPureComponent2 } from "../../common";
import { safeInvoke } from "../../common/utils/functionUtils";
import { findDOMNode } from "react-dom";

export class ResizeSensor extends AbstractPureComponent2<ResizeSensorProps> {
  element: Element | null = null;
  observer = new ResizeObserver((entries) =>
    safeInvoke(this.props.onResize, entries)
  );

  render() {
    return React.Children.only(this.props.children);
  }

  componentDidMount() {
    this.observeElement();
  }
  componentDidUpdate(prevProps: ResizeSensorProps) {
    this.observeElement(this.props.observeParents !== prevProps.observeParents);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  observeElement(force = false) {
    const element = this.getElement();
    if (!(element instanceof Element)) {
      this.observer.disconnect();
      return;
    }

    if (element === this.element && !force) {
      return;
    } else {
      this.observer.disconnect();
      this.element = element;
    }

    this.observer.observe(element);

    if (this.props.observeParents) {
      let parent = element.parentElement;
      while (parent != null) {
        this.observer.observe(parent);
        parent = parent.parentElement;
      }
    }
  }

  getElement() {
    try {
      return findDOMNode(this);
    } catch {
      return null;
    }
  }
}

export default ResizeSensor;
