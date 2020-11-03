// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import medicationStatement from "./medicationStatement";
import { medicationStatementProps } from "./medicationStatement.types";

describe("Test Component", () => {
  let props: medicationStatementProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<medicationStatement {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("medicationStatement");

    expect(component).toHaveTextContent("foo was here");
  });
});
