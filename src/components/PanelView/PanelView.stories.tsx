// Generated with util/create-component.js
import React from "react";
import PanelView from "./PanelView";
import {Intent} from '../../common/enums'
import {IPanelProps} from './PanelView.types'
import {Button} from '../Button/Button'
export default {
    title: "PanelView"
};


interface IPanelExampleProps extends IPanelProps {
    panelNumber: number;
}
class PanelExample extends React.PureComponent<IPanelExampleProps>  {
    public state= {
        counter: 0,
    };

    public render() {
        return (
            <div className="docs-panel-stack-contents-example">
              <Button intent={Intent.PRIMARY} onClick={this.openNewPanel} text="Open new panel" />
                 <h3 > {this.state.counter}</h3> 
            </div>
        );
    }

    private openNewPanel = () => {
        const panelNumber = this.props.panelNumber + 1;
        this.props.openPanel({
            component: PanelExample,
            props: { panelNumber },
            title: `Panel ${panelNumber}`,
        });
       this.updateCounter(this.state.counter+1);
    };

    private updateCounter = (counter: number) => {
        this.setState({ counter });
    };
}

const WithBar = () => <PanelView onClose={()=>{}} showHeader={true} onOpen={()=>{}} panel={{title:'Panel 1',component:PanelExample}} />;




