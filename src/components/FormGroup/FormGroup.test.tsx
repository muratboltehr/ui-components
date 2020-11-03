// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import FormGroup from "./FormGroup";
import { FormGroupProps } from "./FormGroup.types";

describe("Test Component", () => {
  let props: FormGroupProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<FormGroup {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("FormGroup");

    expect(component).toHaveTextContent("foo was here");
  });
});
