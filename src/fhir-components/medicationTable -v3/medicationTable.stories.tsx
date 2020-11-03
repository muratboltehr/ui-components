// Generated with util/create-component.js
import React from "react";
import MedicationTable from "./medicationTable";
import MedicationTableGroup from './MedicationTableGroup';
import { TableRowProps,MedicationWithSupportingInfo } from "./medicationTable.types";

import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    object
  } from "@storybook/addon-knobs";
import { styleForStories } from "../../common/classes";


// let rowData : TableRowProps ={
//   medication:{name:"SITagliptin-metFORMIN",brand:"Janumet"},
//   medicationDetails:{freq:"BID",route:"PO",dose:"50mg/1000mg"},
//   efficacy:"high",
//   price:"86",
//   benefits:['heart','kidney'],
//   risk:['liver',"weight"],
//   action:'Discontinue',
//   isActive:true
// }
let rowData: [MedicationWithSupportingInfo] = [{
  id: "1",
  name: "SITagliptin-metFORMIN (Janumet)",
  details: "300mg dw",
  followUp: "After 2 week",
  supportingInformation: {
    efficacy: {
      code: "high",
      description: "high"
    },
    benefits: [
      {
        code: "heart",
        description: "hert"
      }
    ],
    risks: [
      {
        code: "kidney",
        description: "kindey"
      }
    ],
    wholesale: {
      cost: 81,
      currency: "USD"
    },
    warning: "Warning message",
    
  },
  


},
{
  id: "2",
  name: "SITagliptin-metFORMIN1 (Janumet1)",
  details: "500mg dw",
  followUp: "After 2 week",
  supportingInformation: {
    efficacy: {
      code: "low",
      description: "high"
    },
    benefits: [
      {
        code: "heart",
        description: "hert"
      }
    ],
    risks: [
      {
        code: "kidney",
        description: "kindey"
      }
    ],
    wholesale: {
      cost: 181,
      currency: "USD"
    },
    warning: "Warning message",
    
  }


},]


export default {
    title: "FHIR-Components/Medication Table V3"
};

export const ActiveMedicationTable = () => <MedicationTable  
title={text("Title", "Enter text here")}
selectMultipleRows={boolean('Select Multiple Row', true)} 
onGuideline={boolean('on Guideline', true)} 
isActive={boolean('Is Active', true)}
additionalConsideration={text("additionalConsideration", "Enter text here")}
action={select('Button type',['Discontinue','Order','Active','Dash'],'Discontinue')}
medications={object("Resource", rowData)}
/>;

// export const OnGuideLineTable = () => <MedicationTable type='OnGuideline' selectMultipleRows={boolean('Select Multiple Row', true)} medicationList={activeData} action={select('Button type',['Discontinue','Order','Active','Dash'],'Order')} />;

// export const OffGuideLineTable = () => <MedicationTable type='OffGuideline' selectMultipleRows={boolean('Select Multiple Row', true)} medicationList={activeData} action={select('Button type',['Discontinue','Order','Active','Dash'],'Order')} />;

// export const CombinedMedicationTable = () =>
//  <MedicationTableGroup>
//     <MedicationTable action={'Order'} medicationList={activeData} type='OffGuideline' ></MedicationTable>
// <MedicationTable action={'Active'} medicationList={activeData} type='OffGuideline' ></MedicationTable>
// <MedicationTable action={'Dash'} medicationList={activeData} type='OffGuideline' ></MedicationTable>
// </MedicationTableGroup >;