// Generated with util/create-component.js
import React from "react";
import { styleForStories } from "../../common/classes";
import ReviewOrder from "./ReviewOrder";
import {OrderMedicationProps} from './ReviewOrder.types';

export default {
    title: "upcoming/ReviewOrder"
};

let discontinue:OrderMedicationProps[]  =[{medicationName :{name:"SITagliptin-metFORMIN",type:"Janumet"}}]
let onGuideMedic:OrderMedicationProps[] =[{medicationName :{type:"Trulicity"},medicationDetails:{freq:"BID",route:"PO",dose:"50mg",fu:"4 weeks"}}]
let offGuideMedic:OrderMedicationProps[] =[{medicationName :{type:"Invokana"},medicationDetails:{freq:"BID",route:"PO",dose:"50mg",fu:"2 weeks"}},{medicationName :{type:"metoformin"},medicationDetails:{freq:"BID",route:"PO",dose:"50mg",fu:"2 weeks"}}]


export const Review = () => 
<div style={{display:"block",margin:"100px"}}>
<ReviewOrder discontinuedMedic ={discontinue} onGuideMedic={onGuideMedic} offGuideMedic={offGuideMedic} />
</div>;

export const ReviewOrderEmpty = () => 
<div style={{display:"block",margin:"100px"}}>
<ReviewOrder discontinuedMedic={[]} onGuideMedic={[]} offGuideMedic={[]} />
</div>;

export const DiscontinueOrder = () => 
<div style={{display:"block",margin:"100px"}}>
<ReviewOrder discontinuedMedic ={discontinue} onGuideMedic={[]} offGuideMedic={[]} />
</div>;