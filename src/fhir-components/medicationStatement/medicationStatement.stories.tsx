// Generated with util/create-component.js
import React from "react";
import { object } from "@storybook/addon-knobs";
import MedicationStatementComponent from "./medicationStatement";
import dstu2Json from "./fhir-json-example/medicationStatatement-stu3.json";
import stu3Json from "./fhir-json-example/medicationStatatement-stu3_2.json";

export default {
  title: "FHIR-Components/MedicationStatement",
};

export const DefaultVisualizationDSTU2 = () => {
  const fhirResource = object("Resource", dstu2Json);
  return (
    <>
      <MedicationStatementComponent
        rows={fhirResource}
        fhirVersion="dstu2"
        caption="Anti-Diabetic Medications"
      />
      <MedicationStatementComponent
        rows={fhirResource}
        fhirVersion="dstu2"
        caption="Other Medictions"
      />
    </>
  );
};

export const DefaultVisualizationstu3 = () => {
  const fhirResource = object("Resource", stu3Json);
  return (
    <>
      <MedicationStatementComponent
        rows={fhirResource}
        fhirVersion="stu3"
        caption="Anti-Diabetic Medications"
      />
      <MedicationStatementComponent
        rows={fhirResource}
        fhirVersion="stu3"
        caption="Other Medictions"
      />
    </>
  );
};
