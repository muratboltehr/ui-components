import * as React from "react";
import classNames from 'classnames'

import { MedicationTableGroupProps,EfficacyIconProps } from "./medicationTable.types";
import MedicationTable from "./medicationTable";
import "./medicationTable.scss";
import { TableHeader } from "./TableHeader";
import ActionButton from "./ActionButton";
import TableRow from "./TableRow";
import TablePopover from "./TablePopover";


export class MedicationTableGroupGql extends React.Component<MedicationTableGroupProps> {
  state={
    isRowSeleced :false,
    selectedRow:[],
    isCollapsed :true
  }
  toggleCollapseState =()=>{
    this.setState({isCollapsed:!this.state.isCollapsed})
  }

  render(){
      return(<div className='medication-group-table collapse-container'>
        <div
          className="pl-2 pr-2 combined-medication"
          onClick ={this.toggleCollapseState}
      
        >
          <div className={`collapse-indicator ${this.state.isCollapsed ? '':'active'}`}  >  </div>
          <span className="guideline-tittle" id='drugId'>
            <b>Combination Medications</b>
          </span>
          <span className="drug-name" > {" "} <i className="fas fa-info-circle" /> off guideline </span>
          <TablePopover targetId='drugId' placement='top'> Drug Details will be rendered</TablePopover>
          </div>
      <div className={this.state.isCollapsed ? 'collapse-body':'collapse-body active'}>
        <div className='sub-table-container'>
        {this.props.children}
        </div>
        </div>
      </div>)

  }
}

export default MedicationTableGroupGql;
