// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import MenuItem from "./MenuItem";
import { MenuItemProps } from "./MenuItem.types";

describe("Test Component", () => {
  let props: MenuItemProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<MenuItem {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("MenuItem");

    expect(component).toHaveTextContent("foo was here");
  });
});
