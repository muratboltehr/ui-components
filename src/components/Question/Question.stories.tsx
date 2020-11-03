// Generated with util/create-component.js
import React from "react";
import Question from "./Question";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
export default {
  title: "FHIR-Components/Question",
};
/**
 * name
 */

export const QuestionWithKnobs = () => {
  return (
    <Question
      type={select("Question Type", ["Boolean", "number", "string"], "Boolean")}
      questionDescription={text("Question Description", "A1C Target")}
      MainquestionText={text(
        "Question Text",
        "What is the patients individualized A1C target?"
      )}
      YesPlaceholder={text("Yes Option PlaceHolder", "Yes Place Holder")}
      NoPlaceholder={text("No Option PlaceHolder", "No Place Holder")}
    />
  );
};

export const BooleanQuestion = () => (
  <Question
    type="Boolean"
    questionDescription="A1C Target"
    MainquestionText="What is the patients individualized A1C target?"
    YesPlaceholder="Yes Place Holder"
    NoPlaceholder="No Place Holder"
  />
);

export const NumberQuestion = () => (
  <Question
    type="number"
    questionDescription="A1C Target"
    MainquestionText="What is the patients individualized A1C target?"
  />
);
export const TextQuestion = () => (
  <Question
    type="string"
    questionDescription="A1C Target"
    MainquestionText="What is the patients individualized A1C target?"
  />
);
