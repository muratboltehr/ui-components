// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Dialog from "./Dialog";
import { DialogProps } from "./Dialog.types";

describe("Test Component", () => {
  let props: DialogProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Dialog {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Dialog");

    expect(component).toHaveTextContent("foo was here");
  });
});
