import React from "react";
export interface ICollapseExampleState {
    isOpen: boolean;
}
export declare class ReportRow extends React.Component {
    constructor(props: ICollapseExampleState);
    state: ICollapseExampleState;
    handleOpenCollapse: () => void;
    render(): JSX.Element;
}
