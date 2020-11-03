// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import reportTable from "./reportTable";
import { reportTableProps } from "./reportTable.types";

describe("Test Component", () => {
  let props: reportTableProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<reportTable {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("reportTable");

    expect(component).toHaveTextContent("foo was here");
  });
});
