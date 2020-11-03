// Generated with util/create-component.js
import React from "react";
import classNames from "classnames";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Classes,AbstractPureComponent2 } from "../../common";
import { PanelStackProps,IPanelStackState } from "./PanelStack.types";
import { IPanel } from "../PanelView/PanelView.types";
import {PanelView} from '../PanelView/PanelView'
import  {safeInvoke} from '../../common/utils/functionUtils'
import "./PanelStack.scss";


/**
 * PanelStack manages a stack of panels and displays only the topmost panel.
 * <br/><br/>
 * Each panel appears with a header containing a "back" button to return to the previous panel. The bottom-most initialPanel cannot be closed or removed from the stack. Panels use CSSTransition for seamless transitions.
 * <br/>
 * By default, only the currently active panel is rendered to the DOM. This means that other panels are unmounted and can lose their component state as a user transitions between the panels. To render all panels to the DOM and keep their React trees mounted, change the renderActivePanelOnly prop.
 */
export class PanelStack extends AbstractPureComponent2<PanelStackProps,IPanelStackState> {
  public state: IPanelStackState = {
    direction: "push",
    stack:[this.props.initialPanel]
    // stack: this.props.stack != null ? this.props.stack.slice().reverse() : [this.props.initialPanel],
};

public componentDidUpdate(prevProps: PanelStackProps, prevState: IPanelStackState) {
  //  super.componentDidUpdate(prevProps, prevState);

    // Always update local stack if stack prop changes
    if (this.props.stack !== prevProps.stack && prevProps.stack != null) {
        this.setState({ stack: this.props.stack.slice().reverse() });
    }

    // Only update animation direction if stack length changes
    const stackLength = this.props.stack != null ? this.props.stack.length : 0;
    const prevStackLength = prevProps.stack != null ? prevProps.stack.length : 0;
    if (stackLength !== prevStackLength && prevProps.stack != null) {
        this.setState({
            direction: prevProps.stack.length - this.props.stack.length < 0 ? "push" : "pop",
        });
    }
}

public render() {
    const classes = classNames(
        // Classes.PANEL_STACK,
        `${Classes.PANEL_STACK}-${this.state.direction}`,
        this.props.className,
    );
    return (  
         <TransitionGroup className={classes} component="div">
         
          {this.renderPanels()}
          
       </TransitionGroup>   
    )
}

protected validateProps(props: PanelStackProps) {
    if (
        (props.initialPanel == null && props.stack == null) ||
        (props.initialPanel != null && props.stack != null)
    ) {
        throw new Error('PANEL_STACK_INITIAL_PANEL_STACK_MUTEX');
    }
    if (props.stack != null && props.stack.length === 0) {
        throw new Error('ANEL_STACK_REQUIRES_PANEL');
    }
}

private renderPanels() {
    const { renderActivePanelOnly = true } = this.props;
    const { stack } = this.state;
    if (stack.length === 0) {
        return null;
    }
    const panelsToRender = renderActivePanelOnly ? [stack[0]] : stack;
    const panelViews = panelsToRender.map(this.renderPanel).reverse();
    return panelViews;
}

private renderPanel = (panel: IPanel, index: number) => {
    const { renderActivePanelOnly=true, showPanelHeader = true } = this.props;
    const { stack } = this.state;

    // With renderActivePanelOnly={false} we would keep all the CSSTransitions rendered,
    // therefore they would not trigger the "enter" transition event as they were entered.
    // To force the enter event, we want to change the key, but stack.length is not enough
    // and a single panel should not rerender as long as it's hidden.
    // This key contains two parts: first one, stack.length - index is constant (and unique) for each panel,
    // second one, active changes only when the panel becomes or stops being active.
    const layer = stack.length - index;
    const key = renderActivePanelOnly ? stack.length : layer;

    return (
        <CSSTransition classNames={Classes.PANEL_STACK} key={key} timeout={400}>
             
            <PanelView
                onClose={this.handlePanelClose}
                onOpen={this.handlePanelOpen}
                panel={panel}
                previousPanel={stack[index + 1]}
                showHeader={showPanelHeader}
            />
         </CSSTransition> 
    );
};

private handlePanelClose = (panel: IPanel) => {
    const { stack } = this.state;
    // only remove this panel if it is at the top and not the only one.
    if (stack[0] !== panel || stack.length <= 1) {
        return;
    }
    safeInvoke(this.props.onClose, panel);
    if (this.props.stack == null) {
        this.setState(state => ({
            direction: "pop",
            stack: state.stack.slice(1),
        }));
    }
};

private handlePanelOpen = (panel: IPanel) => {
    safeInvoke(this.props.onOpen, panel);
    if (this.props.stack == null) {
        this.setState(state => ({
            direction: "push",
            stack: [panel, ...state.stack],
        }));
    }
};
}

export default PanelStack;

