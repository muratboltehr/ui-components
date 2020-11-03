// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Question from "./Question";
import { QuestionProps } from "./Question.types";

describe("Test Component", () => {
  let props: QuestionProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Question {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Question");

    expect(component).toHaveTextContent("foo was here");
  });
});
