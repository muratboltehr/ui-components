// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ReviewOrder from "./ReviewOrder";
import { ReviewOrderProps } from "./ReviewOrder.types";

describe("Test Component", () => {
  let props: ReviewOrderProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ReviewOrder {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ReviewOrder");

    expect(component).toHaveTextContent("foo was here");
  });
});
