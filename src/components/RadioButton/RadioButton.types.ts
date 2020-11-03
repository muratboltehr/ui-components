// Generated with util/create-component.
import React from 'react';
import { Intent, Size } from "../../common";
export interface RadioButtonProps {
    /**
     * Whether the group and _all_ its radios are disabled.
     * Individual radios can be disabled using their `disabled` prop.
     */
    disabled?: boolean;
    
    checked?:boolean;
   
    
      /**
   * The size gets the width and height of the radioButton in px
   * Small: 8px
   * Large: 16px
   */
    size?: Size;


    alignLabel?:'rightAlign'|'leftAlign';


    /**
     * Whether the radio buttons are to be displayed inline horizontally.
     */
    inline?: boolean;   

    /** Optional label text to display above the radio buttons. */
    label?: string| number;



      /**
   * The class name the user would like to give the elements for CSS
   */
    className?: string;


    /**
     * Name of the group, used to link radio buttons together in HTML.
     * If omitted, a unique name will be generated internally.
     */
    name?: string;
    
     /**
     * value of the raido button.
     * It can be a string or a number.
     */
    value?: string|number;



    /**
     * Callback invoked when the currently selected radio changes.
     * Use `event.currentTarget.value` to read the currently selected value.
     * This prop is required because this component only supports controlled usage.
     */
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;

}
