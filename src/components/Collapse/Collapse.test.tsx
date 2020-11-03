// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Collapse from "./Collapse";
import { CollapseProps } from "./Collapse.types";

describe("Test Component", () => {
  let props: CollapseProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Collapse {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Collapse");

    expect(component).toHaveTextContent("foo was here");
  });
});
