// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ButtonV from "./ButtonV";
import { ButtonVProps } from "./ButtonV.types";

describe("Test Component", () => {
  let props: ButtonVProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ButtonV {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ButtonV");

    expect(component).toHaveTextContent("foo was here");
  });
});
