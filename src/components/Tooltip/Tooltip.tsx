// Generated with util/create-component.js
import React from "react";
import {Popover} from 'reactstrap'


import { TooltipProps } from "./Tooltip.types";


import "./Tooltip.scss";


export class Tooltip extends React.Component<TooltipProps> {
    state ={
        isPopoverActive :false
    }
    private id = Math.round((Math.random() * 100))


    togglePopoverActive =(event)=>{
        this.setState({isPopoverActive: !this.state.isPopoverActive})
    }

    render(){
        const {placement,content,children} =this.props

        return(
          <>
        <div id={`tooltip-${this.id}`} className='tooltip-target'> {children} </div>
        <Popover
          placement={placement}
          isOpen={this.state.isPopoverActive}
          target={`tooltip-${this.id}`}
          toggle={this.togglePopoverActive}
          trigger='hover'
          popperClassName={"tooltip-container"}
        >
            {content}
            </Popover>
            </>
            )


    }
}


export default Tooltip;
