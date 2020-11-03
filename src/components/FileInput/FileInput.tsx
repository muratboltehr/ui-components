// Generated with util/create-component.js
import React from "react";

import { FileInputProps } from "./FileInput.types";
import {AbstractPureComponent2, Classes, Utils} from '../../common';
import {Button} from '../Button/Button';
import classNames from "classnames";
import "./FileInput.scss";




export class FileInput extends AbstractPureComponent2<FileInputProps> {
  flag: boolean;
  
  constructor(props){
    super(props);
    this.state = { placeholder:"" };
  }
  
  public static defaultPropValues:FileInputProps={
    disabled:false,
    fileinputProps:{},
    placeholder:"Choose file",

  }

  componentDidMount(){
    this.flag=false;
    this.setState({placeholder:this.props.placeholder});
  }

  componentDidUpdate(){
    if(this.state["placeholder"]!=this.props.placeholder && !this.flag){
      this.setState({placeholder:this.props.placeholder});
    }
  }

  public render() {
    // console.log(this.state["placeholder"])
    const {
      disabled,
      fill,
      fileinputProps,
      onInputChange,
      large,
      placeholder,
      buttonText,
    }=this.props;
    // this.setState({inputText:inputText});
    const _className = classNames(
      Classes.FILE_INPUT,
      {
        [Classes.FILL]:fill,
        [Classes.LARGE]:large,
        [Classes.DISABLED]:disabled,
      }
    )  
    // console.log(_className);

    const NS = Classes.getClassNameCase(); 
    // console.log(NS);
    // const uploadProps = {
    //   [`${NS}-button-text`]: buttonText,
    //   className: classNames(Classes.FILE_UPLOAD_INPUT, {
    //     [Classes.FILE_UPLOAD_INPUT_CUSTOM_TEXT]: !!buttonText,
    // }),
    // };
    var InpText=placeholder;
    
    // console.log(uploadProps["className"])
    const handleClick = event => {
      document.getElementById('hiddenFileInput').click();
      };
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      // console.log(fileUploaded["name"]);
      InpText=fileUploaded["name"];
      this.setState({placeholder:InpText});
      this.flag=true;
      if(this.props.handleFile){
        this.props.handleFile(fileUploaded);
      
      }
      // this.props.handleFile(fileUploaded);
    };

    return(
      <div className={_className}>
        <div id="outerDiv">
        <div id="labelDiv"style={{float:"left"}}>
        <label  className="btn-1">{this.state["placeholder"]}</label>
        </div>
        <div className="button" style={{float:"right", overflow:"hidden"}}>
        <Button onClick={handleClick} small={true} disabled={disabled} >
          {buttonText}
        </Button>
        </div>
        <input type="file" id="hiddenFileInput"onChange={handleChange} style={{display:'none'}} /> 
        </div>
      </div>
    );
    // return (
    //   <label className={_className}>
    //     <input {...fileinputProps} type="file" disabled={disabled} />
    //     <span className={uploadProps["className"]}> {inputText}</span>
    //     {/* <div className={uploadProps["className"]}>asdasds</div> */}
    //   </label>
    // );
  }
}

export default FileInput;

