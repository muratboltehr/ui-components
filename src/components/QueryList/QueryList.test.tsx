// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import QueryList from "./QueryList";
import { QueryListProps } from "./QueryList.types";

describe("Test Component", () => {
  let props: QueryListProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<QueryList {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("QueryList");

    expect(component).toHaveTextContent("foo was here");
  });
});
