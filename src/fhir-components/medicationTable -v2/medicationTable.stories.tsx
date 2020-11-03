// Generated with util/create-component.js
import React from "react";
import MedicationTable from "./medicationTable";
import MedicationTableGroup from './MedicationTableGroup';
import { TableRowProps } from "./medicationTable.types";

import {
    withKnobs,
    text,
    boolean,
    number,
    select,
  } from "@storybook/addon-knobs";
import { styleForStories } from "../../common/classes";


let rowData : TableRowProps ={
  medication:{name:"SITagliptin-metFORMIN",brand:"Janumet"},
  medicationDetails:{freq:"BID",route:"PO",dose:"50mg/1000mg"},
  efficacy:"high",
  price:"86",
  benefits:['heart','kidney'],
  risk:['liver',"weight"],
  action:'Discontinue',
  isActive:true
}

let activeData= [rowData,rowData,rowData,rowData]
export default {
    title: "FHIR-Components/Medication Table V2"
};

export const ActiveMedicationTable = () => <MedicationTable  selectMultipleRows={boolean('Select Multiple Row', true)} type='Active' medicationList={activeData} action={select('Button type',['Discontinue','Order','Active','Dash'],'Discontinue')}/>;

export const OnGuideLineTable = () => <MedicationTable type='OnGuideline' selectMultipleRows={boolean('Select Multiple Row', true)} medicationList={activeData} action={select('Button type',['Discontinue','Order','Active','Dash'],'Order')} />;

export const OffGuideLineTable = () => <MedicationTable type='OffGuideline' selectMultipleRows={boolean('Select Multiple Row', true)} medicationList={activeData} action={select('Button type',['Discontinue','Order','Active','Dash'],'Order')} />;

export const CombinedMedicationTable = () =>
 <MedicationTableGroup>
    <MedicationTable action={'Order'} medicationList={activeData} type='OffGuideline' ></MedicationTable>
<MedicationTable action={'Active'} medicationList={activeData} type='OffGuideline' ></MedicationTable>
<MedicationTable action={'Dash'} medicationList={activeData} type='OffGuideline' ></MedicationTable>
</MedicationTableGroup >;