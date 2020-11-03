// Generated with util/create-component.js
import React,{Component} from "react";
import { ProgressBarProps } from "./ProgressBar.types";
import ClassNames from "classnames";
import {Classes} from '../../common';
import {checkRange} from '../../common/utils';
import "./ProgressBar.scss";

 
export class ProgressBar extends Component<ProgressBarProps> {
  render() {

    const {
      animation=true,
      stripes=true,
      intent,
      value
    }=this.props;

    const _className = ClassNames(Classes.PROGRESSBAR,
      Classes.intentClass(intent),
      {[Classes.PROGRESS_ANIMATION_DEACTIVATED]: !animation,
      [Classes.PROGRESS_STRIPES_DEACTIVATED]: !stripes}
    );

    // console.log(_className);
    const wt = value==null?null: checkRange(value,0,100) + "%";
    // console.log(Classes.PROGRESS_METER);
    // console.log(wt)
    return (
      <div className={_className}>
        <div  className={Classes.PROGRESS_METER} style={{width:wt}}> </div>
      </div>
    );
  }
}

export default ProgressBar;

