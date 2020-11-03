// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import patient from "./patient";
import { patientProps } from "./patient.types";

describe("Test Component", () => {
  let props: patientProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<patient {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("patient");

    expect(component).toHaveTextContent("foo was here");
  });
});
