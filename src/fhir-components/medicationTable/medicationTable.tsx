// Generated with util/create-component.js
import * as React from "react";
import classNames from 'classnames'

import { medicationTableProps,EfficacyIconProps } from "./medicationTable.types";

import "./medicationTable.scss";
import { TableHeader } from "./TableHeader";
import ActionButton from "./ActionButton";
import TableRow from "./TableRow";
import TablePopover from "./TablePopover";


export class MedicationTable extends React.Component<medicationTableProps> {
  state={
    isRowSeleced :false,
    selectedRow:[],
    isCollapsed :true
}
toggleCollapseState =()=>{
  this.setState({isCollapsed:!this.state.isCollapsed})
}
selectRow =(index)=>{
  if(this.state.selectedRow.includes(index)){
    this.setState({selectedRow:this.state.selectedRow.filter((ele)=> index!== ele)})
  }else{
    if(this.props.selectMulitpleRows){
      this.setState({selectedRow:[...this.state.selectedRow,index]})
      }
      else{
        this.setState({selectedRow:[index]})
      }
  }

  }
  render() {
    const {type,selectMulitpleRows,action} = this.props 
    const collapseTableclass = classNames(
      "collapse-container",
      "medication-group",
      { "onGuidline-group": type==='OnGuidline', "mt-16  offGuidline-suggestion": type==='OffGuidline' }
    );

    const getActiveTableHeader =()=>{
      return (<div className="pl-8 pr-8 pb-1">
      <div className="left">
        <b>Current Active Diabetic Medications</b>
      </div>
    </div>)}

    const isRowSelected=(index)=>{
      return this.state.selectedRow.includes(index)

    }
    const renderRowprops=()=>{

      return {key:'value'}
    }

    const renderTable=()=>{
      return(<React.Fragment>
        <table className="medic-table table-striped mb-0 w-100">
          <TableHeader isActiveTable={type ==='Active'}></TableHeader>
          <tbody>
             {[1,2,3].map((ele,index)=>{
               const onClick=()=>{
                 this.selectRow(index)
               }
               return <TableRow key={index} isSelected={isRowSelected(index)} onClick={onClick} action={action}></TableRow>
             })}
        </tbody>
        </table>
      </React.Fragment>)
    }
    if(type ==='Active'){
    return (
      <div className="t2dm-active-medications left scene-25 scene-26">
        {getActiveTableHeader()}
          {renderTable()}
      </div>
      
    );}else{
      return(
      <div className={collapseTableclass}>
        <div
          className={`pl-2 pr-2 ${
            type==='OnGuidline' ? "onGuidline-suggestion" : "offGuidline-suggestion"
          }`}
          onClick ={this.toggleCollapseState}
        >
          <div className={`collapse-indicator ${this.state.isCollapsed ? '':'active'}`}>  </div>
          <span className="guidline-tittle">
            {type==='OnGuidline' ? "On Guidline:" : "Off Guidline:"}
          </span>
          <span className="drug-name" id='drug2'><b> GLP-1 RA </b><i className="fas fa-info-circle" /></span>
          <TablePopover targetId='drug2' placement='top'> Drug Details will be rendered based on medication</TablePopover>
          </div>
      <div className={this.state.isCollapsed ? 'collapse-body':'collapse-body active'}>
        {renderTable()}
              </div>
      </div>)
    }
  }
}


export default MedicationTable;