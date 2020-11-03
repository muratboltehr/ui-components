import React, { Component } from "react";
import { TSelectableItemProps } from 'react-selectable-fast';
export declare class SelectableDiv extends Component<TSelectableItemProps> {
    render(): JSX.Element;
}
declare const _default: React.ComponentType<{
    isSelected: boolean;
    isSelecting: boolean;
    selectableRef: (node: HTMLElement) => void;
    children?: {};
} & Partial<Pick<TSelectableItemProps, "isSelected">>>;
export default _default;
