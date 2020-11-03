// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Callout from "./Callout";
import { CalloutProps } from "./Callout.types";

describe("Test Component", () => {
  let props: CalloutProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Callout {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Callout");

    expect(component).toHaveTextContent("foo was here");
  });
});
