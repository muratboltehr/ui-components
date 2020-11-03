// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import FileInput from "./FileInput";
import { FileInputProps } from "./FileInput.types";

describe("Test Component", () => {
  let props: FileInputProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<FileInput {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("FileInput");

    expect(component).toHaveTextContent("foo was here");
  });
});
