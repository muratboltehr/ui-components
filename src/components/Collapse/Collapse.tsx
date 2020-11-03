// Generated with util/create-component.js
import React from "react";
import {
  CollapseProps,
  CollapseState,
  AnimationStates,
} from "./Collapse.types";
import "./Collapse.scss";
import { AbstractPureComponent2, Classes, IProps } from "../../common";
import classNames from "classnames";

/**
 * This class creates an element called Collapse which is similar to a dropdown,
 * as it displays children intput by the user when requested.
 * The props as well as the state are inputs for this class.
 */

 export class Collapse extends React.PureComponent<CollapseProps> {
   state ={
     isOpen : this.props.isOpen,
     height : '0'
   }
  private contents: HTMLElement;

   public static defaultProps: CollapseProps = {
    component: "div",
    isOpen: false,
    keepChildrenMounted: false,
    transitionDuration: 200,
  };
  
   render(){
    

    return React.createElement( this.props.component ,{
      className: classNames(Classes.COLLAPSE, {active:this.props.isOpen})
    } ,<div className={`${Classes.COLLAPSE_BODY} ${this.props.className}`} >
        {this.props.children}
  </div>  )
   }
 }
export default Collapse;
