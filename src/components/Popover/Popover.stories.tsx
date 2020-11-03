// Generated with util/create-component.js
import React from "react";
import {Popover} from "./Popover";
import  Button from "../Button/Button"
import {PopoverInteractionType}  from "./Popover.types"
import {Position} from "../../common/position"
import {Intent} from "../../common/intent"
import { Classes } from "../../common";
import {styleForStories} from '../../common/classes'
export default {
    title: "Foundations/Popover"
};

export const WithKnobs = () => {
    const content = (<div key="text">
    <h5>Confirm deletion</h5>
    <p>Are you sure you want to delete these items? You won't be able to recover them.</p>
    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
        <Button className={Classes.POPOVER_DISMISS} style={{ marginRight: 10 }}>
            Cancel
        </Button>
        <Button intent={Intent.DANGER} className={Classes.POPOVER_DISMISS}>
            Delete
        </Button>
    </div>
</div>)


    return (
        <div style={styleForStories}>
              <Popover
            popoverClassName={Classes.POPOVER_CONTENT_SIZING}
            interactionKind={PopoverInteractionType.CLICK}
            position={Position.BOTTOM}
            content={content}
        >            
        <Button intent={Intent.PRIMARY}>Popover target</Button>
        </Popover>

        </div>
      
    );
}
