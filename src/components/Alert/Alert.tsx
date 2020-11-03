// Generated with util/create-component.js
import React,{Component} from "react";
import { AlertProps } from "./Alert.types";
import "./Alert.scss";
import classNames from "classnames";
import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import {OverlayProps} from '../Overlay/Overlay.types';
import {Icon} from '../Icon/Icon';
import { Classes } from "../../common";
import { TRASH } from "../Icon/IconNames";
import { safeInvoke } from "../../common/utils/functionUtils";

export class Alert extends Component<AlertProps> {

  constructor(props){
    super(props);
    this.validateProps(props);
    this.state={
      isOpen:false,
    }
    this.handleCancel=this.handleCancel.bind(this);

  }

  componentDidUpdate(){
    if(this.props.isOpen!=this.state["isOpen"]){
      this.setState({isOpen:this.props.isOpen});
    }
    console.log("updated",this.props);
  }

  public handleCancel(){
    console.log(this);
    this.setState({isOpen:false});
    console.log("cancel")
    safeInvoke(this.props.onCancel);

  }

  public handleConfirm(){
    this.setState({isOpen:false});
    safeInvoke(this.props.onConfirm);
  }

  protected validateProps(props){
    if(this.props.cancelButtonText!=null && this.props.onCancel==null){
      console.warn("You need to define both the cancelButtonText and the onCancel function Callback");
    }
    if(this.props.confirmButtonText!= null && this.props.onConfirm==null){
      console.warn("You need to define both the confirmButtonText and the onConfirm function Callback")
    }

  }

  public render(){
    const {
      isOpen,
      cancelButtonText,
      confirmButtonText,
      canEscapeKeyClose,
      onCancel,
      onClose,
      canClickOutSideToClose= true,
      style,
      onConfirm,
      icon,
      intent,
      children,
     
    }=this.props;
    console.log(this.props);
    console.log(isOpen)
    return(
      <Dialog
      onClose={this.handleCancel}
      {...this.props}
      >
        {this.props.children}
        
      </Dialog>
    )
  }
  
}

export default Alert;

