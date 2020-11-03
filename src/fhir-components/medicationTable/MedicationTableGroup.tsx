import * as React from "react";
import classNames from 'classnames'

import { MedicationTableGroupProps,EfficacyIconProps } from "./medicationTable.types";
import MedicationTable from "./medicationTable";
import "./medicationTable.scss";
import { TableHeader } from "./TableHeader";
import ActionButton from "./ActionButton";
import TableRow from "./TableRow";
import TablePopover from "./TablePopover";


export class MedicationTableGroup extends React.Component<MedicationTableGroupProps> {
  state={
    isRowSeleced :false,
    selectedRow:[],
    isCollapsed :true
  }
  toggleCollapseState =()=>{
    this.setState({isCollapsed:!this.state.isCollapsed})
  }

  render(){
      return(<div className='medication-group'>
        <div
          className="pl-2 pr-2 combined-medication"
          onClick ={this.toggleCollapseState}
        >
          <div className={`collapse-indicator ${this.state.isCollapsed ? '':'active'}`}>  </div>
          <span className="guidline-tittle">
             Off Guidline:<b>Drug name</b>
          </span>
          <span className="drug-name" id='drug'><b> GLP-1 RA </b><i className="fas fa-info-circle" /></span>
          <TablePopover targetId='drug' placement='top'> Drug Details will be rendered</TablePopover>
          </div>
      <div className={this.state.isCollapsed ? 'collapse-body':'collapse-body active'}>
          <div className='subtable-container'>
        {this.props.children}
        </div>
        </div>
      </div>)

  }
}

export default MedicationTableGroup;