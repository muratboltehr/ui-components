import * as React from "react";
import { MedicationGroup } from "./medicationTable.types";
import "./medicationTable.scss";
export declare class MedicationTableGql extends React.Component<MedicationGroup> {
    state: {
        isRowSelected: boolean;
        selectedRow: any[];
        isCollapsed: boolean;
    };
    debugger: any;
    toggleCollapseState: () => void;
    selectRow: (index: any) => void;
    render(): JSX.Element;
}
export default MedicationTableGql;
