// Generated with util/create-component.js
import * as React from "react";
import classNames from 'classnames';
//  import ReactMarkdown from 'react-markdown'
import marked from 'marked';
import { MedicationGroup,EfficacyIconProps } from "./medicationTable.types";

import "./medicationTable.scss";
import { TableHeader } from "./TableHeader";
import TableRow from "./TableRow";
import TablePopover from "./TablePopover";


export class MedicationTableGql extends React.Component<MedicationGroup> {
  state={
    isRowSelected :false,
    selectedRow:[],
    isCollapsed :true
}
debugger;
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
    const {onGuideline,selectMultipleRows, medications, isActive,action} = this.props 
    console.log(this.props);
    const  type = onGuideline ? 'OnGuideline' : 'OffGuideline';
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

    const renderMarkdown=(markdownText: string) => {
      const html = marked(markdownText || '')
      return(
        // <ReactMarkdown source={markdownText}  /> 
      <div> <div dangerouslySetInnerHTML={{__html: html}} /></div>
      ) 
    }

    const renderTable=()=>{
      return(<React.Fragment>
        <table className="medication-table">
          <TableHeader isActiveTable={isActive}></TableHeader>
          <tbody>
             {medications.map((ele,index)=>{
               const onClick=()=>{
                 this.selectRow(index)
               }
               return <TableRow key={index}  {...ele} isSelected={isRowSelected(index)} onClick={onClick} action={action} isActive={isActive}></TableRow>
             })}
        </tbody>
        </table>
      </React.Fragment>)
    }
    if(isActive){
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
        <span className="drug-name" id={this.props.title.toString().replace(" ","")}><b> {this.props.title} </b><i className="fas fa-info-circle" /></span>
          <span className="guideline-tittle">
            {type==='OnGuideline' ? " on guideline" : " off guideline"}
          </span>
          
      <TablePopover targetId={this.props.title.toString().replace(" ","")}placement='top'> 
      {renderMarkdown(this.props.additionalConsideration?.toString())}
      
      </TablePopover>
          </div>
      <div className={this.state.isCollapsed ? 'collapse-body':'collapse-body active'}>
        {renderTable()}
      </div>
      </div>
      )
    }
  }
}


export default MedicationTableGql;
