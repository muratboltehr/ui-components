import * as React from "react";
interface TablePopoverProps {
    placement: "top" | "bottom" | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end';
    targetId: string;
}
export declare class TablePopover extends React.Component<TablePopoverProps> {
    state: {
        isPopoverActive: boolean;
    };
    togglePopoverActive: (event: any) => void;
    render(): JSX.Element;
}
export default TablePopover;
