import { Intent } from "../../common";

// Generated with util/create-component.js
export interface EditableTextProps {
    className?: String;
    /**
     * ConfirmEnter if true and in multiline mode , the enter key will trigger onConfirm and mod+enter will insert a new line.
     * If false, the key bindings are inverted such that enter adds a newline.
     * @default false
     */

    confirmEnter?: boolean;


    /**
     * Whether the text can be edited.
     * @default false
     */

    disabled?: Boolean;

    /**
     * internt : Visual intent color to apply to element
     */

     intent?: Intent;


     /**
      * Maximum number of lines before scrolling begins, when multiline
      */
    maxLines?: number;

    /**
     * Minimum number of lines (essentially minimum height), when multiline
     * @default 1
     */

    minimumLines?: number;

    /**
     * Determines if you can have multiline cotent or not 
     */


    multiline?: boolean;


    onChange?: any;


    onConfirm?: any;


    placeholder?: string;

    value?: string;

    elementName?: keyof JSX.IntrinsicElements;

}
