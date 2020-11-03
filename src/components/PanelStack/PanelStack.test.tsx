// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PanelStack from "./PanelStack";
import { PanelStackProps } from "./PanelStack.types";

describe("Test Component", () => {
  let props: PanelStackProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<PanelStack {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("PanelStack");

    expect(component).toHaveTextContent("foo was here");
  });
});
