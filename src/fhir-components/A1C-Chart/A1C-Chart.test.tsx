// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import A1C-Chart from "./A1C-Chart";
import { A1C-ChartProps } from "./A1C-Chart.types";

describe("Test Component", () => {
  let props: A1C-ChartProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<A1C-Chart {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("A1C-Chart");

    expect(component).toHaveTextContent("foo was here");
  });
});
