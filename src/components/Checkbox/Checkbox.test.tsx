// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";

describe("Test Component", () => {
  let props: CheckboxProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Checkbox {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Checkbox");

    expect(component).toHaveTextContent("foo was here");
  });
});
