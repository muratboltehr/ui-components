// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Switch from "./Switch";
import { SwitchProps } from "./Switch.types";

describe("Test Component", () => {
  let props: SwitchProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Switch {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Switch");

    expect(component).toHaveTextContent("foo was here");
  });
});
