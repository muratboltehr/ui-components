// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ReportDetails from "./ReportDetails";
import { ReportDetailsProps } from "./ReportDetails.types";

describe("Test Component", () => {
  let props: ReportDetailsProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ReportDetails {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ReportDetails");

    expect(component).toHaveTextContent("foo was here");
  });
});
