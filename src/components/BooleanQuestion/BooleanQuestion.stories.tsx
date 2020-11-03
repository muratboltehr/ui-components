// Generated with util/create-component.js
import React, { useState } from "react";
import BooleanQuestion from "./BooleanQuestion";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";

const definitionText = 'Chronic kidney disease (CKD) or chronic renal failure (CRF) is a term that encompasses all degrees of decreased renal function, from damaged–at risk through mild, moderate, and severe chronic kidney failure. The guidelines define CKD as either kidney damage or a decreased glomerular filtration rate'
export default {
  title: "Foundations/BooleanQuestion",
  decorators: [withKnobs],
  component: BooleanQuestion,
};

export const WithBar = () => {
  const [selectedData, setSelectedData] = useState("No");
  const getData = (val: any) => {
    setSelectedData(val);
  };
  return (
    <div className='question-example'>
    <BooleanQuestion
    questionType ={select("Question Type",["Polar","text"],"Polar")}
      popoverQuestionText={text(
        "Question text",
        "Does the patient have established CHF?"
      )}
      popoverYesText={text("Popover Yes text", "")}
      popoverNoText={text(
        "Popover No text",
        " (No CHF related conditions found)"
      )}
      definitionMD ={text('Definition MD' , definitionText)}
      selectedVal={selectedData}
      warningCondition={text("Warning Condition", "Yes")}
      onSelect={getData}
    ></BooleanQuestion>
    </div>
  );
};
