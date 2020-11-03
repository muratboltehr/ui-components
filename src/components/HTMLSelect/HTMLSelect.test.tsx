// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import HTMLSelect from "./HTMLSelect";
import { HTMLSelectProps } from "./HTMLSelect.types";

describe("Test Component", () => {
  let props: HTMLSelectProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<HTMLSelect {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("HTMLSelect");

    expect(component).toHaveTextContent("foo was here");
  });
});
