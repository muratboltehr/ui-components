// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Chart from "./Chart";
import { ChartProps } from "./Chart.types";

describe("Test Component", () => {
  let props: ChartProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Chart {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Chart");

    expect(component).toHaveTextContent("foo was here");
  });
});
