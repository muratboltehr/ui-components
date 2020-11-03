import * as React from "react";
import { MedicationTableProps } from "./medicationTable.types";
import "./medicationTable.scss";
export declare class MedicationTable extends React.Component<MedicationTableProps> {
    state: {
        isRowSelected: boolean;
        selectedRow: any[];
        isCollapsed: boolean;
    };
    toggleCollapseState: () => void;
    selectRow: (index: any) => void;
    render(): JSX.Element;
}
export default MedicationTable;
