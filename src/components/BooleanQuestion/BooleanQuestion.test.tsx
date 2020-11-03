// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import {}  from 'jest'

import BooleanQuestion from "./BooleanQuestion";
import { BooleanQuestionProps } from "./BooleanQuestion.types";

describe("Test BooleanQuestion Component", () => {
  let props: BooleanQuestionProps;

  beforeEach(() => {
    props = {
       questionType : "Polar",
       popoverQuestionText : "What is your age?",
       popoverYesText : "yes text",
       popoverNoText :"No text",
       onSelect : ()=>{},
       definitionMD : "Lorem Text",
       selectedVal:"yes"
    };
  });

  const renderComponent = () => render(<BooleanQuestion {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("BooleanQuestion");

    expect(component).toHaveTextContent("foo was here");
  });
});
