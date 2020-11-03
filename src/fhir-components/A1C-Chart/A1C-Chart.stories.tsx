// Generated with util/create-component.js
import React from "react";
import A1CChart from "./A1C-Chart";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
export default {
  title: "FHIR-Components/A1C Chart",
  decorators: [withKnobs],
  component: A1CChart,
};

const rowData = [
  {
    dateRecorded: Date.UTC(2018, 11, 15),
    a1c: 10,
  },
  {
    dateRecorded: Date.UTC(2019, 2, 1),
    a1c: 7.9,
  },
  {
    dateRecorded: Date.UTC(2019, 5, 4),
    a1c: 7.6,
  },
  {
    dateRecorded: Date.UTC(2019, 8, 2),
    a1c: 7.3,
  },
  {
    dateRecorded: Date.UTC(2019, 11, 2),
    a1c: 7.5,
  },
  {
    dateRecorded: Date.UTC(2020, 2, 3),
    a1c: 7.8,
  },
  {
    dateRecorded: Date.UTC(2020, 5, 3),
    a1c: 8.2,
  },
  {
    dateRecorded: Date.UTC(2020, 8, 4),
    a1c: 8.5,
  },
];

export const Chart = () => {
  return (
    <A1CChart
      yAxisTitle={text("y axis Title", "A1C (%)")}
      showDataTable={boolean("Show Data", true)}
      dataLabelsEnabled
      datalableFormat={"{x} mm"}
      tableData={object("Resource", rowData)}
    />
  );
};
