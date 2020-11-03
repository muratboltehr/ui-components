// Merge
// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";
import { ButtonGroupProps } from "./ButtonGroup.types";

describe("Test Component", () => {
  let props: ButtonGroupProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<ButtonGroup {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ButtonGroup");

    expect(component).toHaveTextContent("foo was here");
  });
});
