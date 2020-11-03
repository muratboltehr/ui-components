// Generated with util/create-component.js
import React, { Children } from "react";

import { EditableTextProps } from "./EditableText.types";
import classNames from "classnames";
import "./EditableText.scss";
import {clamp} from '../../common/utils';
import { AbstractPureComponent2, Classes ,Keys} from "../../common";


export class EditableText extends AbstractPureComponent2<EditableTextProps> {
  private textReference: HTMLElement|null=null;
  private flag = true;

  constructor(props){
    super(props);
    // const currentValue = props.value==null?props.defaultvalue:props.value;
    this.handleChange= this.handleChange.bind(this);
    this.state={
      content:"",
      contentHeight:0,
      contentWidth:0,
      minimumLines:0,
      elementName:"div"
    }
  }
  // public setDimensions(){
  //   if(this.props.multiline===true){

  //   }
  // }

  componentDidMount(){
    // this.setDimensions();
    if(this.state["elementName"]!=this.props.elementName){
      this.setState({elementName:this.props.elementName});
    }
    this.updateContent();
    if(this.state["minimumLines"]!=this.props.minimumLines){
      this.updateInputDimensions();
      this.setState({minimumLines:this.props.minimumLines});
    }
    this.updateInputDimensions();
  }

  componentDidUpdate(){
    this.updateContent();
    if(this.state["minimumLines"]!=this.props.minimumLines){
      this.updateInputDimensions();
      console.log("inside,"+this.state["minimumLines"]);
      this.setState({minimumLines:this.props.minimumLines});
    }
    // console.log("inside");
  }

  private updateContent(){
    
    var content = this.textReference.textContent;
    // console.log(content);
    // var maxChar= (this.props.maxLength!= undefined && this.props.maxLength>0)? this.props.maxLength:Infinity;
    if(content === undefined){
      content = this.props.placeholder; 
    }
    const stateChange={
      
      content: content
    }
    // console.log(content.length);
    this.setState(stateChange);
  }
  

  public getLineHeight(element: HTMLElement) {
    // getComputedStyle() => 18.0001px => 18
    let lineHeight = parseInt(getComputedStyle(element).lineHeight.slice(0, -2), 10);
    // this check will be true if line-height is a keyword like "normal"
    if (isNaN(lineHeight)) {
        // @see http://stackoverflow.com/a/18430767/6342931
        const line = document.createElement("span");
        line.innerHTML = "<br>";
        element.appendChild(line);
        const singleLineHeight = element.offsetHeight;
        line.innerHTML = "<br><br>";
        const doubleLineHeight = element.offsetHeight;
        element.removeChild(line);
        // this can return 0 in edge cases
        lineHeight = doubleLineHeight - singleLineHeight;
    }
    return lineHeight;
}


  private updateInputDimensions(){
    const { maxLines, minimumLines,  multiline } = this.props;
    const { parentElement, textContent } = this.textReference;
    let { scrollHeight, scrollWidth } = this.textReference;
    const lineHeight = this.textReference.scrollHeight;
    
    // console.log(scrollHeight);
    // console.log(lineHeight);
    if (lineHeight >= 0) {
      
      scrollHeight = clamp(scrollHeight, minimumLines * lineHeight, maxLines * lineHeight);
    }
    
    scrollHeight = Math.max(scrollHeight, this.getFontSize(this.textReference) + 1, this.getLineHeight(parentElement));
    
    
    this.setState({
      contentHeight:scrollHeight,
      contentWidth: scrollWidth
    })


  }


  public insertAtCaret(el: HTMLTextAreaElement, text: string) {
    const { selectionEnd, selectionStart, value } = el;
    if (selectionStart >= 0) {
        const before = value.substring(0, selectionStart);
        const after = value.substring(selectionEnd, value.length);
        const len = text.length;
        el.value = `${before}${text}${after}`;
        el.selectionStart = selectionStart + len;
        el.selectionEnd = selectionStart + len;
    }
}

  private handleKey = (event: React.KeyboardEvent<HTMLElement>) => {
    const { altKey, ctrlKey, metaKey, shiftKey, which } = event;
    if (which === Keys.ESCAPE) {
        this.textReference.blur;
        return;
    }

    const hasModifierKey = altKey || ctrlKey || metaKey || shiftKey;
    if (which === Keys.ENTER) {
      
        // prevent IE11 from full screening with alt + enter
        // shift + enter adds a newline by default
        if (altKey || shiftKey) {
            event.preventDefault();
        }

        if (this.props.confirmEnter && this.props.multiline) {
          
            if (event.target != null && hasModifierKey) {
                this.insertAtCaret(event.target as HTMLTextAreaElement, "\n");
                this.handleChange();
                
            } else {
              if(this.props.onConfirm!==undefined){
                this.props.onConfirm();
              }
                this.textReference.blur();
            }
        } else if (!this.props.multiline || hasModifierKey) {
            if(this.props.onConfirm!==undefined){
              this.props.onConfirm();
            }
            this.textReference.blur();
        }
    }
};

public handleChange(){
  var content= this.textReference.textContent;
  this.setState({
    content:content
  })
  if(this.props.onChange != undefined){
    this.props.onChange(this.textReference);
  }
  // this.props.onChange(this.textReference);
}




  public getFontSize(element: HTMLElement) {
    const fontSize = getComputedStyle(element).fontSize;
    return fontSize === "" ? 0 : parseInt(fontSize.slice(0, -2), 10);
}
  // public selectText(event){
  //   console.log(event) 
  //   // if(this.props.selectAllonFocus== true){
  //   //     console.log(event.target);
      
  //   // }
  // }

  render() {
    // console.log(this.state["content"])
    // console.log(this.state["contentHeight"])
    const {children,elementName="div" } = this.props;
    var value=this.props.value===null?this.props.placeholder:this.props.value;
    var singleline= false;
    if(this.props.multiline===false || this.props.multiline===undefined){
      singleline= true;
    }
    const _className=classNames(Classes.EDITABLE_TEXT,
      Classes.intentClass(this.props.intent),
      {
        [Classes.SINGLELINE]: singleline,
        [Classes.DISABLED]: this.props.disabled,
        
      });
    // var onClickMessage = this.props.selectAllonFocus===true?this.selectText():null;
    // console.log(this.state["content"])
    // console.log(_className);
    return React.createElement(elementName,{
      className: _className,
      ref : (ref:HTMLElement|null) => (this.textReference=ref),
      title:this.state["content"],
      contentEditable:true,
      placeholder: this.props.placeholder,
      onKeyDown: this.handleKey,
      onKeyPress: this.handleChange,
      // onFocus: (event:Event)=> this.selectText(event)
      style:{height:this.state["contentHeight"] , maxLines:this.props.maxLines, maxHeight: (3*this.state["contentHeight"]),}
       
    },
    children);

    


  }
}

export default EditableText;

