// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PatientCard from "./PatientCard";
import { PatientCardProps } from "./PatientCard.types";

describe("Test Component", () => {
  let props: PatientCardProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<PatientCard {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("PatientCard");

    expect(component).toHaveTextContent("foo was here");
  });
});
