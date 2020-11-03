// Generated with util/create-component.js
import React, { Children } from "react";
import { TextProps } from "./Text.types";
import ClassNames from "classnames";

import {AbstractPureComponent2,Classes} from '../../common';
import "./Text.scss";


export class Text extends AbstractPureComponent2<TextProps> {
  private textReference: HTMLElement|null=null;
  constructor(props){
    super(props);
    this.state={
      isContentOverflowing:false,
      content:""
    };
  }

  public componentDidMount(){
    this.updateState();
  }

  public componentDidUpdate(){
    this.updateState();
  }

  render() {
    //gives the className responsible for the newly created element 
    const _className = ClassNames(
      {[Classes.TEXT_ELLIPSIS]: this.props.ellipsize}
      ,
      this.props.className,
    );

    
    const { children, elementName = "div" } = this.props;

    // console.log(this.state["isContentOverflowing"]);

    return React.createElement(elementName,{
        className: _className,
        ref : (ref:HTMLElement|null) => (this.textReference=ref),
        title: this.state["isContentOverflowing"]? this.state["content"]:undefined
         
      },
      children)
    
  }

//updateState function to update state everytime the prop changes
  private updateState(){

    if(this.textReference==null){
      return;
    }

    const stateChange={
      isContentOverflowing : this.props.ellipsize && this.textReference.scrollWidth > this.textReference.clientWidth,
      content: this.textReference.textContent 
    }
    this.setState(stateChange);
  }
  
}

export default Text;

