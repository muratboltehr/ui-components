// Generated with util/create-component.js
import React from "react";
import { Classes } from "../../common";
import { PanelViewProps } from "./PanelView.types";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import "./PanelView.scss";


export class PanelView extends React.Component<PanelViewProps> {
  public render() {
    const { panel, onOpen } = this.props;
    // two <span> tags in header ensure title is centered as long as
    // possible, due to `flex: 1` magic.
    return (
        <div className={Classes.PANEL_STACK_VIEW}>
            {this.maybeRenderHeader()}
            <panel.component openPanel={onOpen}  closePanel={this.handleClose} {...panel.props} />
        </div>
    );
}

private maybeRenderHeader() {
    if (!this.props.showHeader) {
        return null;
    }
    return (
        <div className={Classes.PANEL_STACK_HEADER}>
            <span>{this.maybeRenderBack()}</span>
            
            <Text className={Classes.HEADING} ellipsize={true}>
                {this.props.panel.title}
            </Text>
            <span />
        </div>
    );
}

private maybeRenderBack() {
    if (this.props.previousPanel === undefined) {
        return null;
    }
  
    return (
        <span>
⬅️
<Button
            className={Classes.PANEL_STACK_HEADER_BACK}
            //  icon="chevron-left"
            minimal={true}
            onClick={this.handleClose}
            small={true}
            text={this.props.previousPanel.title}
        />
        </span>
        
    );
}

private handleClose = () => this.props.onClose(this.props.panel);
}

export default PanelView;

