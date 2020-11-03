// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import HTMLElements from "./HTMLElements";
import { HTMLElementsProps } from "./HTMLElements.types";

describe("Test Component", () => {
  let props: HTMLElementsProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<HTMLElements {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("HTMLElements");

    expect(component).toHaveTextContent("foo was here");
  });
});
