import * as React from "react";
interface ActionButtonProps {
    type: 'Order' | 'Discontinue' | 'Active' | 'Dash';
    onClick: () => void;
    isSelected: boolean;
}
declare class ActionButton extends React.Component<ActionButtonProps> {
    state: {
        selected: boolean;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
export default ActionButton;
