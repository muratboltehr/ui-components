// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import RadioButton from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types";

describe("Test Component", () => {
  let props: RadioButtonProps;

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<RadioButton {...props} />);

  it("should render foo text correctly", () => {
    // props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("RadioButton");

    expect(component).toHaveTextContent("foo was here");
  });
});
