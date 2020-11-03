import React from "react";
import { render } from "@testing-library/react";

import Temlplate from "./Template";
import { TemplateProps } from "./Template.types";

describe("Test Component", () => {
  let props: TemplateProps;

  beforeEach(() => {
    props = {
      theme: "primary",
    };
  });

  const renderComponent = () => render(<Temlplate {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-secondary");
  });
});
