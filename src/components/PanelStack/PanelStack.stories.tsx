// Generated with util/create-component.js
import React, { useState } from "react";
import PanelStack from "./PanelStack";
import { IPanel,IPanelProps } from "../PanelView/PanelView.types";
import Button from "../Button/Button";
import {Intent} from '../../common/enums'
import {Classes} from '../../common'
import {styleForStories} from '../../common/classes'
import {
    withKnobs,
    boolean,
  } from "@storybook/addon-knobs";

/********************** */

/****************************** */
export default {
    title: "Foundations/PanelStack",
    decorators: [withKnobs],
    component:PanelStack
};

interface IPanelExampleProps extends IPanelProps {
    panelNumber: number;
}



class PanelExample extends React.PureComponent<IPanelExampleProps>  {
    public mystyle = {
        color: "white",
        backgroundColor: "#87d4c5",
        padding: "10px",
        fontFamily: "Arial",
        textAlign:"center"  
      };

    public render() {
        return (
            <div style={this.mystyle} >
                <Button intent={Intent.PRIMARY} onClick={this.openNewPanel} text="Open new panel" />   
                 <h2>We are on panel {this.props.panelNumber} </h2>
                 <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus velit quod distinctio dignissimos nam voluptatibus facilis dicta deleniti eveniet asperiores soluta, illum, corporis saepe mollitia qui eius repudiandae. Animi, architecto. </p>
            </div>
        );
    }

    private openNewPanel = () => {
        const panelNumber = this.props.panelNumber + 1;
        this.props.openPanel({
            component: PanelExample,
            props: { panelNumber },
            title: <h4>{`Panel ${panelNumber}`}</h4> ,
        });
      
    };

  
}



export const panelStack = () => {

    const [counter,setCounter]=useState(0)

    const initialPanel: IPanel = {
        component: PanelExample,
        props: {
            panelNumber: 1,
        },
        title: <h4>{`Panel 1`}</h4>,
    };

    const [state,setState] = useState({
        activePanelOnly: true,
        currentPanelStack: [initialPanel],
        showHeader: true,
      
    });

    
    const addToPanelStack = (newPanel: IPanel) => {
        setState(state => ({ ...state,currentPanelStack: [newPanel, ...state.currentPanelStack] }));
    };

    const removeFromPanelStack = (_lastPanel: IPanel) => {
        // In this example, the last panel is always the one closed.
        // Using `this.props.closePanel()` is one way to violate this.
        setState(state => ({...state, currentPanelStack: state.currentPanelStack.slice(1) }));
    };

    
  
    
return <div >
    <h2>Paneltjkljklaclk</h2>
    <PanelStack         
    className="docs-panel-stack-example"
    initialPanel={initialPanel}
    onOpen={addToPanelStack}
    onClose={removeFromPanelStack}
    renderActivePanelOnly={boolean('renderActivePanelOnly',true)}
    showPanelHeader={boolean('showPanelHeader',true)}
    
/>
</div>

     }



