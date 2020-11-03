import * as React from "react";
import { MedicationTableGroupProps } from "./medicationTable.types";
import "./medicationTable.scss";
export declare class MedicationTableGroup extends React.Component<MedicationTableGroupProps> {
    state: {
        isRowSeleced: boolean;
        selectedRow: any[];
        isCollapsed: boolean;
    };
    toggleCollapseState: () => void;
    render(): JSX.Element;
}
export default MedicationTableGroup;
