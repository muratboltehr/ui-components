import {Popover} from 'reactstrap'
import * as React from "react";

interface TablePopoverProps{
    placement :"top" | "bottom"|
    'top-start' |
    'top-end'|
    'right'|
    'right-start'|
    'right-end'|
    'bottom'|
    'bottom-start'|
    'bottom-end'
    /* HTLM ELEMENT ID => where popover should occur */
    targetId :string,

}



export class TablePopover extends React.Component<TablePopoverProps> {
    state ={
        isPopoverActive :false
    }

    togglePopoverActive =(event)=>{
        this.setState({isPopoverActive: !this.state.isPopoverActive})
    }

    render(){
        const {placement,targetId} =this.props

        return(
        <Popover
          placement={placement}
          isOpen={this.state.isPopoverActive}
          target={targetId}
          toggle={this.togglePopoverActive}
          trigger='hover'
          popperClassName={"tooltip-container"}
        >
            {this.props.children}
            </Popover>
            )


    }
}

export default TablePopover;