// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import EditableText from "./EditableText";
import { EditableTextProps } from "./EditableText.types";

describe("Test Component", () => {
  let props: EditableTextProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<EditableText {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("EditableText");

    expect(component).toHaveTextContent("foo was here");
  });
});
