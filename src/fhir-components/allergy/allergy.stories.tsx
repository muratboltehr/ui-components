// Generated with util/create-component.js
import React from "react";
import { object } from "@storybook/addon-knobs";
import AllergyComponent from "./allergy";
import dstu2Json from "./fhir-json-example/allergy-dstu2.json";
import stu3Json from "./fhir-json-example/allergy-stu3.json";
import r4Json from "./fhir-json-example/allergy-r4.json";
import { withKnobs } from "@storybook/addon-knobs";
export default {
  title: "FHIR-Components/Allergy",
  component: AllergyComponent,
  decorators: [withKnobs],
};

export const dstu2Example = () => {
  const fhirResource = object("Resource", dstu2Json);
  return (
    <AllergyComponent
      rows={fhirResource}
      fhirVersion="dstu2"
    ></AllergyComponent>
  );
};

export const stu3Example = () => {
  const fhirResource = object("Resource", stu3Json);
  return (
    <AllergyComponent rows={fhirResource} fhirVersion="stu3"></AllergyComponent>
  );
};

export const r4Example = () => {
  const fhirResource = object("Resource", r4Json);
  return (
    <AllergyComponent rows={fhirResource} fhirVersion="r4"></AllergyComponent>
  );
};
