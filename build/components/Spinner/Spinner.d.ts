/**
 * This program makes a spinner using React and TypeScript
 */
import React, { Component } from "react";
import "./Spinner.scss";
import { SpinnerProps } from "./Spinner.types";
/**
 * This class contains all the functions to execute the program
 */
export declare class Spinner extends Component<SpinnerProps> {
    static readonly SIZE_SMALL = 20;
    static readonly SIZE_STANDARD = 50;
    static readonly SIZE_LARGE = 100;
    render(): React.ReactElement<{
        className: string;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    /**
     * This method gets the size of the spinner based on the props
     * Also checks if the given size is valid and if not then sets
     * it to the MIN_SIZE
     * If size value is null then defaults it to the standard size
     */
    private getSize;
    /**
     * This method checks if an input is valid based on max and
     * min parameters
     * @param input value input by the user
     * @param min minimum accpeted value
     * @param max maximum accpeted value
     * @return wether input is valid or not ,and is null then returns null
     */
    private validValue;
    /**
     * Helps get the name of the intent class for the program to run
     * @param intent the user input
     * @return the intent in lowercase
     */
    /**
     * Calculates the position and dimensions of the svg based on the the strokeWidth
     * @param strokeWidth the strokeWidth of the spinner
     */
    private getViewBox;
}
export default Spinner;
