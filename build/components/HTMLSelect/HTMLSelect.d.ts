import React from "react";
import { ISelectOptionProp, ISelectProp } from "./HTMLSelect.types";
import "./HTMLSelect.scss";
export declare class HTMLSelect extends React.Component<ISelectProp> {
    state: {
        isActive: boolean;
        selectedLabel: string;
        selectedValue: string;
        searchText: string;
    };
    toggleActive: () => void;
    updateSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isMatchSearchText: (text: string) => boolean;
    handleSelect: (value: any, label: any) => void;
    render(): JSX.Element;
}
export declare const Option: React.FC<ISelectOptionProp>;
