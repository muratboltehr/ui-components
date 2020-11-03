// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ResizeSensor from "./ResizeSensor";
import { ResizeSensorProps } from "./ResizeSensor.types";

describe("Test Component", () => {
  let props: ResizeSensorProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ResizeSensor {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ResizeSensor");

    expect(component).toHaveTextContent("foo was here");
  });
});
