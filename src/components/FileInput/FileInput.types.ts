// Generated with util/create-component.js
export interface FileInputProps {
    /**
     * Setting this to true will disable the child component 
     */
    
    disabled?: boolean,

    /**
     * Whether the file input should take up the full width of the container
     */
    fill?: boolean,

    // hasSelection?: Boolean,

    /**
     * This prop can be used to pass any additional Input element prop type to the FileInput component
     */
    fileinputProps?: React.HTMLProps<HTMLInputElement>;

    /**
     * This is provided as a convenience to provide callback to the HTML input element
     * So you can pass 'onChange' here to notify the user in case of an Event
     */
    onInputChange?: React.FormEventHandler<HTMLInputElement>;
    
    /**
     * Whether the file input should appear with large styling 
     */
    large?: boolean,

    /**
     * placeholder is the text for the input element
     * @default "Choose File"
     */

    placeholder?: String,

    /**
     * buttonText is the text for the button element
     * @default "browse here"
     */
    buttonText?: String,
    
    /**
     * Callback function to handle the file
     * Needs to be passed if you need to do anything with the file 
     */
    handleFile?: any

}
