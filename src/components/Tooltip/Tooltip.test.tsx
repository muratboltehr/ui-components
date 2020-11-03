// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Tooltip from "./Tooltip";
import { TooltipProps } from "./Tooltip.types";

describe("Test Component", () => {
  let props: TooltipProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Tooltip {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Tooltip");

    expect(component).toHaveTextContent("foo was here");
  });
});
