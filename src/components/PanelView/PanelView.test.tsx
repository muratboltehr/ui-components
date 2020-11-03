// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PanelView from "./PanelView";
import { PanelViewProps } from "./PanelView.types";

describe("Test Component", () => {
  let props: PanelViewProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<PanelView {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("PanelView");

    expect(component).toHaveTextContent("foo was here");
  });
});
