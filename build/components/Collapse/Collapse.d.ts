import React from "react";
import { CollapseProps } from "./Collapse.types";
import "./Collapse.scss";
/**
 * This class creates an element called Collapse which is similar to a dropdown,
 * as it displays children intput by the user when requested.
 * The props as well as the state are inputs for this class.
 */
export declare class Collapse extends React.PureComponent<CollapseProps> {
    state: {
        isOpen: boolean;
        height: string;
    };
    private contents;
    static defaultProps: CollapseProps;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Collapse;
