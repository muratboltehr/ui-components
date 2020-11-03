// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Tag from "./Tag";
import { TagProps } from "./Tag.types";

describe("Test Component", () => {
  let props: TagProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Tag {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Tag");

    expect(component).toHaveTextContent("foo was here");
  });
});
