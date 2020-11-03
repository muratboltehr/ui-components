// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import NavBar from "./NavBar";
import { NavBarProps } from "./NavBar.types";

describe("Test Component", () => {
  let props: NavBarProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<NavBar {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("NavBar");

    expect(component).toHaveTextContent("foo was here");
  });
});
