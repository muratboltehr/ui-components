/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { PanelStackProps, IPanelStackState } from "./PanelStack.types";
import "./PanelStack.scss";
/**
 * PanelStack manages a stack of panels and displays only the topmost panel.
 * <br/><br/>
 * Each panel appears with a header containing a "back" button to return to the previous panel. The bottom-most initialPanel cannot be closed or removed from the stack. Panels use CSSTransition for seamless transitions.
 * <br/>
 * By default, only the currently active panel is rendered to the DOM. This means that other panels are unmounted and can lose their component state as a user transitions between the panels. To render all panels to the DOM and keep their React trees mounted, change the renderActivePanelOnly prop.
 */
export declare class PanelStack extends AbstractPureComponent2<PanelStackProps, IPanelStackState> {
    state: IPanelStackState;
    componentDidUpdate(prevProps: PanelStackProps, prevState: IPanelStackState): void;
    render(): JSX.Element;
    protected validateProps(props: PanelStackProps): void;
    private renderPanels;
    private renderPanel;
    private handlePanelClose;
    private handlePanelOpen;
}
export default PanelStack;
