// Generated with util/create-component.js
export interface TextProps {
    
    /**
     * Prop type ellipsize is a boolean variable which when true will ellipsize the text
     * @default false
     */
    
    ellipsize?: boolean;


    /**
     * Proptype element name is used to provide the user with the flexiblity of passing different html element types to create the text
     * like 'div', 'h1', 'h2' etc
     * @default "div"
     */

    elementName?: keyof JSX.IntrinsicElements;



    className?:string;

}
