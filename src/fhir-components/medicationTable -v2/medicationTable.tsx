// Generated with util/create-component.js
import * as React from "react";
import classNames from 'classnames';

import { MedicationTableProps,EfficacyIconProps } from "./medicationTable.types";

import "./medicationTable.scss";
import { TableHeader } from "./TableHeader";
import TableRow from "./TableRow";
import TablePopover from "./TablePopover";


export class MedicationTable extends React.Component<MedicationTableProps> {
  state={
    isRowSelected :false,
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
    if(this.props.selectMultipleRows){
      this.setState({selectedRow:[...this.state.selectedRow,index]})
      }
      else{
        this.setState({selectedRow:[index]})
      }
  }

  }
  render() {
    const {type,selectMultipleRows,action,medicationList} = this.props 
    const collapseTableclass = classNames(
      "collapse-container",
      "medication-group",
      { "onGuideline-group": type==='OnGuideline', "offGuideline-group": type==='OffGuideline' }
    );

    const getActiveTableHeader =()=>{
      return (<div className="pl-8 pr-8 pb-1">
       <b> Current Active Diabetic Medications</b>
    </div>)}

    const isRowSelected=(index)=>{
      return this.state.selectedRow.includes(index)

    }
    const renderRowprops=()=>{

      return {key:'value'}
    }

    const renderTable=()=>{
      return(<React.Fragment>
        <table className="medication-table">
          <TableHeader isActiveTable={type ==='Active'}></TableHeader>
          <tbody>
             {medicationList.map((ele,index)=>{
               const onClick=()=>{
                 this.selectRow(index)
               }
               return <TableRow key={index}  {...ele} isSelected={isRowSelected(index)} onClick={onClick} action={action} isActive={this.props.type==='Active'}></TableRow>
             })}
        </tbody>
        </table>
      </React.Fragment>)
    }
    if(type ==='Active'){
    return (
      <div className="active-medications">
        {getActiveTableHeader()}
          {renderTable()}
      </div>
    );}else{
      return(
      <div className={collapseTableclass}>
        <div
          className={`pl-2 pr-2 ${type==='OnGuideline' ? "onGuideline-suggestion" : "offGuideline-suggestion"}`}
          onClick ={this.toggleCollapseState}
        >
        <div className={`collapse-indicator ${this.state.isCollapsed ? '':'active'}`}>  </div>
        <span className="drug-name" id='drug'><b> GLP-1 RA </b><i className="fas fa-info-circle" /></span>
          <span className="guideline-tittle">
            {type==='OnGuideline' ? " on guideline" : " off guideline"}
          </span>
          <TablePopover targetId='drug' placement='top'> Drug Details will be rendered based on medication</TablePopover>
          </div>
      <div className={this.state.isCollapsed ? 'collapse-body':'collapse-body active'}>
        {renderTable()}
      </div>
      </div>
      )
    }
  }
}


export default MedicationTable;