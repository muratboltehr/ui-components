import * as React from "react";
import classNames from 'classnames'
import TablePopover from "./TablePopover";


interface ActionButtonProps{
    type:'Order' | 'Discontinue' | 'Active' |'Dash',
    onClick:()=>void,
    isSelected:boolean
}
class  ActionButton extends React.Component<ActionButtonProps>{
    state = {
        selected :false
    }
    handleClick =()=>{
        this.setState({selected:!this.state.selected})
        this.props.onClick()
    }

    render(){
        let buttonText =''

        if(this.props.type.toUpperCase() ==="ORDER" || this.props.type.toUpperCase() ===  "DISCONTINUE"){
            const buttonClass = classNames("action-button",'available',{selected:this.props.isSelected,'order-btn':this.props.type.toUpperCase() ===  "ORDER"})
            buttonText = this.props.type.toUpperCase()
            return (
                <button type="button" onClick={this.handleClick} className={buttonClass}>
                  <span className={`in-line-icon ${this.props.isSelected && 'selected'}`}>  </span>
                  <span className="action-name">{this.props.type.toUpperCase()} </span>
                </button>)
        }else if(this.props.type.toUpperCase() ==="ACTIVE"){
            const buttonClass = classNames("action-button",'unavailable')
            return (
                <div >
                  <TablePopover placement='top' targetId='activebtn'>Patient is currently on <b>Janumet</b>,<br/>must D/C before a drug in this class can be ordered.</TablePopover>

                <button type="button"  id='activebtn' className={buttonClass}>
                   Active Rx
                </button>
                </div>
              );
        }else if(this.props.type.toUpperCase() === "DASH"){
            const buttonClass = classNames("action-button",'unavailable')

            return (
                <div >
                  <TablePopover placement='top' targetId='dashbtn'>Patient is already on a drug in this class, check existing medications to D/C</TablePopover>

                <button type="button"  id='dashbtn'  className={buttonClass}>
                   <>&#8213;</>
                </button>
                </div>
              );


        }
    }

} 

export default ActionButton;
