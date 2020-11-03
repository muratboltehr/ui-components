// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import condition from "./condition";
import { conditionProps } from "./condition.types";

describe("Test Component", () => {
  let props: conditionProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<condition {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("condition");

    expect(component).toHaveTextContent("foo was here");
  });
});
