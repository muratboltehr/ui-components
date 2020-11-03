// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import allergy from "./allergy";
import { allergyProps } from "./allergy.types";

describe("Test Component", () => {
  let props: allergyProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<allergy {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("allergy");

    expect(component).toHaveTextContent("foo was here");
  });
});
