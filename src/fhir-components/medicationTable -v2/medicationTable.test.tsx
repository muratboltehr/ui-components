// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import {MedicationTable} from './medicationTable'
import { MedicationTableProps } from "./medicationTable.types";

describe("Test Component", () => {
  let props: medicationTableProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<MedicationTable ></MedicationTable>);

  it("should render foo text correctly", () => {
    props.foo = "foo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("medicationTable");

    expect(component).toHaveTextContent("foo was here");
  });
});
