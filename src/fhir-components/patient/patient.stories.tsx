// Generated with util/create-component.js
import React from "react";
import PatientComponent from "./patient";
import { object } from "@storybook/addon-knobs";
import patietstu2 from "./fhir-json-example/patient-stu2.json";
import patietstu3 from "./fhir-json-example/patient-stu3.json";
import patietR4 from "./fhir-json-example/patient-r4.json";

export default {
  title: "FHIR-Components/Patient",
};

export const DefaultVisualizationDSTU2 = () => {
  const fhirResource = object("Resource", patietstu2);
  return <PatientComponent patient={fhirResource} />;
};

export const DefaultVisualizationDSTU3 = () => {
  const fhirResource = object("Resource", patietstu3);
  return <PatientComponent patient={fhirResource} />;
};

export const DefaultVisualizationR4 = () => {
  const fhirResource = object("Resource", patietR4);
  return <PatientComponent patient={fhirResource} />;
};
