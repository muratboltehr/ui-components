import React from "react";

export function isReactNodeEmpty(
  node?: React.ReactNode,
  skipArray = false
): boolean {
  return (
    node == null ||
    node === "" ||
    node === false ||
    (!skipArray &&
      Array.isArray(node) &&
      // only recurse one level through arrays, for performance
      (node.length === 0 || node.every((n) => isReactNodeEmpty(n, true))))
  );
}

export function isReactElement<T = any>(
  child: React.ReactNode
): child is React.ReactElement<T> {
  return (
    typeof child === "object" &&
    typeof (child as any).type !== "undefined" &&
    typeof (child as any).props !== "undefined"
  );
}

export function ensureElement(
  child: React.ReactNode | undefined,
  tagName: keyof JSX.IntrinsicElements = "span"
) {
  if (child == null || typeof child === "boolean") {
    return undefined;
  } else if (typeof child === "string") {
    // cull whitespace strings
    return child.trim().length > 0
      ? React.createElement(tagName, {}, child)
      : undefined;
  } else if (
    typeof child === "number" ||
    typeof (child as any).type === "symbol" ||
    Array.isArray(child)
  ) {
    // React.Fragment has a symbol type, ReactNodeArray extends from Array
    return React.createElement(tagName, {}, child);
  } else if (isReactElement(child)) {
    return child;
  } else {
    // child is inferred as {}
    return undefined;
  }
}

export function isElementOfType<P = {}>(
  element: any,
  ComponentType: React.ComponentType<P>
): element is React.ReactElement<P> {
  return (
    element != null &&
    element.type != null &&
    element.type.displayName != null &&
    element.type.displayName === ComponentType.displayName
  );
}
