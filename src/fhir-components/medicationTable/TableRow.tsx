import React, { Fragment } from "react";

import { TableRowProps ,EfficacyIconProps} from "./medicationTable.types";
import TablePopover from './TablePopover'
import ActionButton from "./ActionButton";
import classNames from 'classnames'
import "./medicationTable.scss";
import { Popover } from "reactstrap";

export class TableRow extends React.Component<TableRowProps> {

   
  render(){
      return(<tr className={classNames('active-rx',{'selected':this.props.isSelected})}>
      <td className="text-left active-medication-name">
        <b>sitagliptin-metFORMIN</b>
        <div>(Janumet)</div>
      </td>
      <td className="text-left t2dm-details-column">
        <div className="left w-40">
          <div className="medication-details">
            Freq: <b>BID</b>
          </div>
          <div className="medication-details">
            Route: <b>Oral</b>
          </div>
        </div>
        <div className="left w-60">
          <div className="medication-details">
            Current Dose: <b>50mg/1000mg</b>
          </div>
        </div>
      </td>
      <td className="text-left">
        <EfficacyIcon name='Intermediate'></EfficacyIcon>
      </td>
      <td className="text-left t2dm-patient-cost">
        <span className="t2dm-patient-copay">$85</span>
      </td>
      <td className="text-right t2dm-considerations-benefits">
        <i
          className="fas fa-heart consideration-benefit-solid"
        ></i>
        <i
          data-toggle="tooltip2"
          title=""
          className="fad fa-balance-scale-left consideration-benefit"
          aria-hidden="true"
          data-original-title="Potential for modest weight loss"
        ></i>
        <span className="sr-only">Potential for modest weight loss</span>
      </td>
      <td className="text-left t2dm-considerations-risks">
        <i
          data-toggle="tooltip2"
          title=""
          className="fad fa-kidneys consideration-risk"
          aria-hidden="true"
          data-original-title="<ul><li>Contraindicated with eGFR < 30 mL/min/1.73 m²</li><li>Renal dose adjustment required</li></ul>"
        ></i>
        <span className="sr-only">
          <ul>
            <li>Contraindicated with eGFR &lt; 30 mL/min/1.73 m²</li>
            <li>Renal dose adjustment required</li>
          </ul>
        </span>
        <i
          data-toggle="tooltip2"
          title=""
          className="far fa-wine-glass consideration-risk-solid"
          aria-hidden="true"
          data-original-title="Interacts with alcohol"
        ></i>
        <span className="sr-only">Interacts with alcohol</span>
        <i
          data-toggle="tooltip2"
          title=""
          className="hidden t2dm-patient-relative-cost fad fa-dollar-sign consideration-risk"
          aria-hidden="true"
          data-original-title="High cost"
        ></i>
        <span className="sr-only">High cost</span>
      </td>
      <td className="text-left action-col">
          <ActionButton type={this.props.action}  isSelected={this.props.isSelected} onClick={this.props.onClick} ></ActionButton>
      </td>
    </tr>)
  }}

  const  EfficacyIcon:React.FC<EfficacyIconProps> =(props)=>{

    switch(props.name){
       case 'Highest':
           return (<div className="efficacy highest-efficacy">Highest</div>)
           break
        case 'High':
           return (<div className="efficacy high-efficacy">High</div>)
           break
        case 'Intermediate':
          return (<div className="efficacy intermediate-efficacy">
          Intermediate
        </div>)
        break;
        case 'Low':
          return (<div className="efficacy low-efficacy">Low</div>)
    }
  
  }

  export default TableRow;