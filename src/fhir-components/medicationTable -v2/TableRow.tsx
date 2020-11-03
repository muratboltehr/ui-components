import React, { Fragment } from "react";

import { TableRowProps, EfficacyIconProps } from "./medicationTable.types";
import TablePopover from './TablePopover'
import ActionButton from "./ActionButton";
import classNames from 'classnames'
import "./medicationTable.scss";
import { Popover } from "reactstrap";
import { EfficacyIcon, BenefitIcon, RiskIcon } from "./TableIcon";

export class TableRow extends React.PureComponent<TableRowProps> {


  render() {

    const { medication, efficacy, benefits, risk, price, isActive, action,isSelected } = this.props
    const getMedicationDetails = () => {
      const { medicationDetails, isActive } = this.props
      const { dose = '100mg', freq = 'bid', route = 'po', direction = null } = medicationDetails
      return (
        <div className="medication-details">
          <div>{`${dose} ${route} ${freq}`}</div>
          {direction ? <div>{direction}</div> : null}
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
            <b>{medication?.name ?? "Sample"}</b>
            <div>{`(${medication?.brand ?? 'Brand name'})`}</div>
          </td>
          <td className="details-column">
            {getMedicationDetails()}
          </td>
          <td className="efficacy-column">
            <EfficacyIcon name={efficacy}></EfficacyIcon>
          </td>
          {!this.props.isActive && <td className="cost-column">
            <span className="t2dm-patient-copay">$85</span>
          </td>}
          <td className="text-right benefits-column">
            {benefits.map(iconName => <BenefitIcon name={iconName}></BenefitIcon>)}
          </td>
          <td className="text-left risks-column">
            {risk.map(iconName => <RiskIcon name={iconName}></RiskIcon>)}
          </td>
        </tr>
        {isActive && isSelected &&  <tr className='table-row drug-discontinue-warning selected'>
          <td colSpan={isActive ? 6 : 7}>
            <div className='warning-msg'>When discontinuing Janumet, consider adding metFORMIN.</div>
          </td>

        </tr>}
      </React.Fragment>)
  }
}


export default TableRow;