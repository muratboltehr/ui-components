// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Text from "./Text";
import { TextProps } from "./Text.types";

describe("Test Component", () => {
  let props: TextProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Text {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Text");

    expect(component).toHaveTextContent("foo was here");
  });
});
