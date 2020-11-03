// Generated with util/create-component.js
import React from "react";
import BMIChart from "./Chart";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
export default {
  title: "FHIR-Components/BMI Chart",
  decorators: [withKnobs],
  component: BMIChart,
};

const yAxisTitle = "BMI (kg/m²)";

const data = [
  [Date.UTC(2020, 1, 15), 32.3],
  [Date.UTC(2020, 2, 10), 33.6],
  [Date.UTC(2020, 3, 10), 34.2],
  [Date.UTC(2020, 4, 10), 35.4],
  [Date.UTC(2020, 5, 10), 36.8],
  [Date.UTC(2020, 6, 10), 37.6],
];

const rowData = [
  {
    dateRecorded: Date.UTC(2020, 1, 15),
    bmi: 32.3,
    weight: 200,
  },
  {
    dateRecorded: Date.UTC(2020, 2, 10),
    bmi: 33.6,
    weight: 205,
  },
  {
    dateRecorded: Date.UTC(2020, 3, 10),
    bmi: 34.2,
    weight: 208,
  },
  {
    dateRecorded: Date.UTC(2020, 4, 10),
    bmi: 35.6,
    weight: 211,
  },
  {
    dateRecorded: Date.UTC(2020, 5, 10),
    bmi: 28.6,
    weight: 211,
  },
  {
    dateRecorded: Date.UTC(2020, 6, 10),
    bmi: 25.6,
    weight: 281,
  },
  {
    dateRecorded: Date.UTC(2020, 7, 10),
    bmi: 22.6,
    weight: 311,
  },
  {
    dateRecorded: Date.UTC(2020, 8, 30),
    bmi: 26.6,
    weight: 218,
  }
];

export const BmiChart = () => (
  <BMIChart
    yAxisTitle={text("y axis Title", yAxisTitle)}
    showDataTable={boolean("Show Data", true)}
    dataLabelsEnabled
    datalableFormat={"{x} mm"}
    tableData={object("Resource", rowData)}
  />
);
