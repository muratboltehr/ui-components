// Generated with util/create-component.js

import { HTMLDivProps } from "../../common";

export interface ISelectOptionProp extends HTMLDivProps {
    handleSelect? : any,
    value : string,
    label:string,
    className?: string
    
  }
  export interface ISelectProp extends HTMLDivProps {
    defaultValue? : string
    label: string,
    className?: string
    
    /**
     * Function to receive selected value
     */
    onSelect : any
  }