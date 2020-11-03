// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Omnibar from "./Omnibar";
import { OmnibarProps } from "./Omnibar.types";

describe("Test Component", () => {
  let props: OmnibarProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Omnibar {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Omnibar");

    expect(component).toHaveTextContent("foo was here");
  });
});
