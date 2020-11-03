// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Overlay from "./Overlay";
import { OverlayProps } from "./Overlay.types";

describe("Test Component", () => {
  let props: OverlayProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Overlay {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Overlay");

    expect(component).toHaveTextContent("foo was here");
  });
});
