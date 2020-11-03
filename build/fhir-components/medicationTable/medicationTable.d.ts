import * as React from "react";
import { medicationTableProps } from "./medicationTable.types";
import "./medicationTable.scss";
export declare class MedicationTable extends React.Component<medicationTableProps> {
    state: {
        isRowSeleced: boolean;
        selectedRow: any[];
        isCollapsed: boolean;
    };
    toggleCollapseState: () => void;
    selectRow: (index: any) => void;
    render(): JSX.Element;
}
export default MedicationTable;
