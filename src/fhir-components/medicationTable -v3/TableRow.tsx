import React, { Fragment } from "react";

import { MedicationWithSupportingInfo, EfficacyIconProps } from "./medicationTable.types";
import TablePopover from './TablePopover'
import ActionButton from "./ActionButton";
import classNames from 'classnames'
import "./medicationTable.scss";
import { Popover } from "reactstrap";
import { EfficacyIcon, BenefitIcon, RiskIcon } from "./TableIcon";

export class TableRow extends React.PureComponent<MedicationWithSupportingInfo> {


  render() {

     const {id, name, details, followUp, supportingInformation} = this.props
    // const { medication, efficacy, benefits, risk, price, isActive, action,isSelected } = this.props
    const getMedicationDetails = () => {
      const { details, followUp } = this.props
      
      return (
        <div className="medication-details">
          <div>{details}</div>
          {followUp ? <div>{followUp}</div> : null}
        </div>

      )
    }

    return (
      <React.Fragment>
        <tr className={classNames('table-row', { 'selected': this.props.isSelected })}>
          <td className="action-column">
            <ActionButton type={this.props.action} isSelected={this.props.isSelected} onClick={this.props.onClick} ></ActionButton>
          </td>
          <td className="medication-column">
            <b>{name}</b>
            
          </td>
          <td className="details-column">
            {getMedicationDetails()}
          </td>
          <td className="efficacy-column">
            <EfficacyIcon name={supportingInformation.efficacy.code}></EfficacyIcon>
          </td>
          {!this.props.isActive && <td className="cost-column">
            <span className="t2dm-patient-copay">{supportingInformation.wholesale?.currency}{supportingInformation.wholesale?.cost}</span>
          </td>}
          {/* <td className="cost-column">
            <span className="t2dm-patient-copay">{supportingInformation.wholesale.cost}</span>
          </td> */}
          <td className="text-right benefits-column">
            {supportingInformation.benefits.map(iconName => <BenefitIcon name={iconName.code}></BenefitIcon>)}
          </td>
          <td className="text-left risks-column">
            {supportingInformation.risks.map(iconName => <RiskIcon name={iconName.code}></RiskIcon>)}
          </td>
        </tr>
        
      </React.Fragment>)
  }
}


export default TableRow;