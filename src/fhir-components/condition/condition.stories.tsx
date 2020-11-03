// Generated with util/create-component.js
import React from "react";
import { object } from "@storybook/addon-knobs";
import ConditionComponent from "./condition";
import dstu2Json from "./fhir-json-example/problemList-dstu2.json";
import stu3Json from "./fhir-json-example/problemLiet-stu3.json";
import r4Json from "./fhir-json-example/problemLiet-r4.json";
import {
  withKnobs,
} from "@storybook/addon-knobs";

  
export default {
  title: "FHIR-Components/ProblemList",

};

export const dstu2Example = () => {
  const fhirResource = object("Resource", dstu2Json);
  return (
    <ConditionComponent
      rows={fhirResource}
      fhirVersion="dstu2"
    ></ConditionComponent>
  );
};

export const stu3Example = () => {
  const fhirResource = object("Resource", stu3Json);
  return (
    <ConditionComponent
      rows={fhirResource}
      fhirVersion="stu3"
    ></ConditionComponent>
  );
};

export const r4Example = () => {
  const fhirResource = object("Resource", r4Json);
  return (
    <ConditionComponent
      rows={fhirResource}
      fhirVersion="r4"
    ></ConditionComponent>
  );
};
