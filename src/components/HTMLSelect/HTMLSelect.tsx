// Generated with util/create-component.js
import { Options } from "@popperjs/core/lib/modifiers/flip";
import React, { Children } from "react";
import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";

import { ISelectOptionProp,ISelectProp } from "./HTMLSelect.types";
import "./HTMLSelect.scss";


export class HTMLSelect extends React.Component<ISelectProp>{
    state = {
      isActive : false,
      selectedLabel : this.props.defaultValue ?? `Select ${this.props.label}`,
      selectedValue : this.props.defaultValue ?? '',
      searchText : ''
    };

    toggleActive =()=>{
      this.setState({isActive: !this.state.isActive})
    }
   updateSearchText =(e:React.ChangeEvent<HTMLInputElement>)=>{
     this.setState({searchText: e.target.value})
   }
   isMatchSearchText =(text:string)=>{
     //if no string for search return true always
     if(text.length === 0) return true;
     let {searchText} = this.state
     return text.toLowerCase().startsWith(searchText.toLowerCase())
   }
  handleSelect=(value,label)=>{
      this.setState({selectedLabel:label})
      this.setState({selectedValue:value},()=>{
        this.props.onSelect(this.state.selectedValue)
      })
      this.toggleActive()
  }
  render() {
    return (
      <div className="select-container">
      <div className="select-box">
      <div className={`selected ${this.state.isActive ? 'active' :''}`} onClick={this.toggleActive} >
          {this.state.selectedLabel}
      </div>
        <div className={`option-container ${this.state.isActive ? 'active' :''}`}>
          <div className='filter-container'>
            <input className='filter-input' type='text' value={this.state.searchText} onChange={this.updateSearchText} placeholder='Search items...'/>
          </div>
          {React.Children.map(this.props.children, child =>{
            if (React.isValidElement(child) && child.type === Option && this.isMatchSearchText(child.props.label ?? '')){
                return React.cloneElement(child, {...child.props, handleSelect : this.handleSelect})
          }}
      )}
        </div>
      </div>
      </div>
    );
  }
}


export const Option:React.FC<ISelectOptionProp> =({value,label,...props})=>{
  const [checked, setChecked] = React.useState(false)
  const handleClick=()=>{
      props.handleSelect(value,label)
      setChecked(!checked)
  }
  return(
    <div className="option" onClick ={handleClick} >
            <input type="radio" className="radio" id="film" name="category" value={value} />
            {/* to be implemented for multiSelect option */}
            {/* <Checkbox checked={checked} onChange={handleClick} label={label}></Checkbox> */}
  <span className='option-label'>{props.children}</span>
    </div>

  )
}



