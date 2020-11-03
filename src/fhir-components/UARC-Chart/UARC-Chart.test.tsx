// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import UARC-Chart from "./UARC-Chart";
import { UARC-ChartProps } from "./UARC-Chart.types";

describe("Test Component", () => {
  let props: UARC-ChartProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<UARC-Chart {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("UARC-Chart");

    expect(component).toHaveTextContent("foo was here");
  });
});
