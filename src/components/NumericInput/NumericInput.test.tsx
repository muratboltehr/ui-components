// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import NumericInput from "./NumericInput";
import { NumericInputProps } from "./NumericInput.types";

describe("Test Component", () => {
  let props: NumericInputProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<NumericInput {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("NumericInput");

    expect(component).toHaveTextContent("foo was here");
  });
});
