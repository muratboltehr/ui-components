// Generated with util/create-component.js
import React, { Component } from "react";
import {HTMLSelect,Option} from "./HTMLSelect";

export default {
    title: "Upcoming/HTMLSelect",
    Component: HTMLSelect
};

const options = [
    {label:'Automobiles',value:'Automobiles'},
    {label:'Film & Animation',value:'Film & Animation'},
    {label:'Science',value:'Science & Technology'},
    {label:'Art',value:'Art'},
    {label:'Music',value:'Music'},
    {label:'Science',value:'Science & Technology'},
    {label:'Art',value:'Art'},
    {label:'Music',value:'Music'}

]
export const WithKnobs = () => <HTMLSelect label={'items'} onSelect={value=>{console.log(value)}}>
     {options.map((option,ind)=>{
         return <Option value={option.value} key={ind} label={option.label}> {option.label} </Option>
     })}
    </HTMLSelect>;
