// Generated with util/create-component.js
import React from "react";

import { DialogProps } from "./Dialog.types";
import {Button} from '../Button/Button';
import { AbstractPureComponent2, Classes } from "../../common";
import {Icon} from '../Icon/Icon';
import {Overlay} from '../Overlay/Overlay';
import Classnames from "classnames";
import "./Dialog.scss";
import { SAVE } from "../Icon/IconNames";


export class Dialog extends AbstractPureComponent2<DialogProps> {
  
  public static defaultProps: DialogProps={
    canClickOutSideToClose: true,
    isOpen:false,
  };
  
  private showHeader(){
    var {icon,title} = this.props;
    if(title===undefined || title==null){
      return ;
    }
    
    return (
      <div className={Classes.DIALOG_HEADER}>
        <Icon icon="save" iconSize={Icon.SIZE_LARGE}></Icon>
        <h4>{title}</h4>
        {this.renderCloseButton()}
      </div>
    )
  }

  private renderCloseButton(){
    if(this.props.showCloseButton!== false){
      return(
        <Button
        icon={<Icon icon="save" iconSize={Icon.SIZE_LARGE} />}
        minimal={true}
        onClick={this.props.onClose}
        />
      )
    }
    else{
      return undefined;
    }
  }


  render() {
    var {
      autofocus=true,
      canEscapeKeyClose= true,
      canClickOutSideToClose = true,
      className,
      icon,
      showCloseButton,
      isOpen = true,
      onClose = this.props.onClose,
      title,
      transitionDuration,
      transitionName,
      usePortal

    }=this.props;

    //logging
    console.log(this.props);

    return (
      <Overlay {...this.props} className={Classes.OVERLAY_SCROLL_CONTAINER} hasBackdrop={true}>
        <div className={Classes.DIALOG_CONTAINER}>

          {/* The below change is made as style props is not defined in the props interface */}
         {/* <div className = {Classnames(Classes.DIALOG,this.props.className)} style={this.props.style}> */}
         <div className = {Classnames(Classes.DIALOG,this.props.className)}>
            {this.showHeader()}
            {this.props.children}
          </div>
        </div>
      </Overlay>
    );
  }
}

export default Dialog;

