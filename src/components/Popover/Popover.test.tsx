// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Popover from "./Popover";
import { PopoverProps } from "./Popover.types";

describe("Test Component", () => {
  let props: PopoverProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Popover {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Popover");

    expect(component).toHaveTextContent("foo was here");
  });
});
