// Generated with util/create-component.js
import React from "react";
import UARCChart from "./UARC-Chart";
import {withKnobs,text,boolean,object}  from '@storybook/addon-knobs'
export default {
    title: "FHIR-Components/UARC-Chart",
    decorators: [withKnobs],
    component: UARCChart
};

const rowData = [
    {
      dateRecorded: Date.UTC(2018,11,15),
      uarc: 10,
    },
    {
      dateRecorded: Date.UTC(2019, 1, 1),
      uarc: 15,
    },
    {
      dateRecorded: Date.UTC(2019, 3, 4),
      uarc: 47,
    },
    {
      dateRecorded: Date.UTC(2019, 6, 2),
      uarc: 113,
    },
    {
      dateRecorded: Date.UTC(2019, 7, 2),
      uarc: 209,
    },
    {
      dateRecorded: Date.UTC(2019, 8, 3),
      uarc: 402,
    }
  ];
  
  export const Chart = () => {
    return (
      <UARCChart
        yAxisTitle={text("y axis Title", "Urine Microalbumin/Creatinine (mg/g)")}
        showDataTable={boolean("Show Data", true)}
        dataLabelsEnabled
        datalableFormat={"{x} mm"}
        tableData={object("Resource", rowData)}
      />
    );
  };
  