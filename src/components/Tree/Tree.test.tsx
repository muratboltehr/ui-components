// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Tree from "./Tree";
import { TreeProps } from "./Tree.types";

describe("Test Component", () => {
  let props: TreeProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Tree {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Tree");

    expect(component).toHaveTextContent("foo was here");
  });
});
