import React from "react";
import { TooltipProps } from "./Tooltip.types";
import "./Tooltip.scss";
export declare class Tooltip extends React.Component<TooltipProps> {
    state: {
        isPopoverActive: boolean;
    };
    private id;
    togglePopoverActive: (event: any) => void;
    render(): JSX.Element;
}
export default Tooltip;
