// Generated with util/create-component.js
import React from "react";

import { QuestionProps } from "./Question.types";

import "./Question.scss";
import { AbstractPureComponent2, Classes } from "../../common";
import {Icon} from '../Icon/Icon';
import Divider from "../Divider/Divider";
import {Button} from '../Button/Button';
import classNames from "classnames";
import {NumericInput} from '../NumericInput/NumericInput';
import {EditableText} from '../EditableText/EditableText';

export class Question extends AbstractPureComponent2<QuestionProps> {
  constructor(props){
    super(props);
    this.state = {selection:""}
  }
  activeSelection(st?){
    if(this.props.type ==="Boolean"){
      this.setState({selection: st});
    }
  }

  public renderTypeContent(){
    var{
      type= Boolean,
      YesPlaceholder,
      NoPlaceholder,
    }=this.props;
    var content;
    switch(type){
      case "Boolean":
        content= (<div>  
                    <Button minimal={true} small={true} intent="primary" fill={true} onClick={()=>this.activeSelection("Yes")}>
                      <div className={Classes.QUESTION_OPTIONS}>Yes</div>
                      <div className={Classes.QUESTION_PLACEHOLDER}>{YesPlaceholder}</div>
                    </Button>
                    <br/>
                      <Button minimal={true} small={true} intent="primary" fill={true} >
                      <div className={Classes.QUESTION_OPTIONS} >No</div>
                      <div className={Classes.QUESTION_PLACEHOLDER}>{NoPlaceholder}</div>
                      </Button>
                  </div>
                  );
        break;
      case "number":
        content=(<div>
                  <input type="number" id="number" ></input>

                 </div>

        );
        break;
      case "string":
        content=(<div>
          <input placeholder="Enter Here" id ="string"></input>
        </div>);
        break;
    }
    return content;
  }

  public getValue(){
    var value;
    if(this.props.type==="Boolean"){
      value = this.state["selection"];
    }
    if(this.props.type==="number"){
      value = (document.getElementById("number") as HTMLInputElement).value;
    }
    if(this.props.type==="string"){
      value = (document.getElementById("string") as HTMLInputElement).value;
    }

    if(this.props.onSave){
      this.props.onSave(value);
    }

  }


  public render(){
    const{
      type= Boolean,
      YesPlaceholder,
      NoPlaceholder,
      questionDescription,
      MainquestionText,
      linkId

    }=this.props;
    const _className = classNames(Classes.QUESTION);
    return(
      <div className={Classes.QUESTION}>
        <div className={Classes.QUESTION_DESC} >
          {questionDescription}
          {/* <button className={Classes.QUESTION_CROSS}>&#10005;</button> */}
        </div>
        <Divider/>
        <div className={Classes.QUESTION_MAIN}>
          {MainquestionText}
        </div>
        {this.renderTypeContent()}
        <div>
          {/* <button>Save</button> */}
          <div style={{float:"right"}}>
          <Button small={true} intent="primary" onClick={this.getValue}>Save</Button>
          <span>  </span>
          <Button small={true} intent="danger" onClick ={this.props.onClose}>Close</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Question;

