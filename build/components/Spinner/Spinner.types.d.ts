/// <reference types="react" />
import { Intent, Size } from "../../common";
/**
 * This interface contains all the props being used for the spinner
 */
export interface SpinnerProps {
    /**
     * The intent of the spinner can be justified by the following prop
     * i.e based on the intent color of the spinner changes
     */
    intent?: Intent;
    /**
     * The size gets the width and height of the spinner in px
     * A set of standard sizes have been provided and have been listed
     * as readonly in the Spinner class
     * Small: 20px
     * Medium: 50px
     * Large: 100px
     */
    size?: Size;
    /**
     * The class name the user would like to give the elements for CSS
     */
    className?: string;
    /**
     *
     */
    tagName?: keyof JSX.IntrinsicElements;
    /**
     * This helps set the value up to which the spinner arc should be set
     * and the values can range from 0-1
     */
    value?: number;
}
