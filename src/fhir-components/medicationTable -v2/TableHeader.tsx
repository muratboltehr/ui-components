import React, { Fragment } from "react";

import {
  TableHeaderProps,
} from "./medicationTable.types";
import TablePopover from "./TablePopover";
import "./medicationTable.scss";
import { Popover } from "reactstrap";
import { EfficacyIcon, BenefitIcon, RiskIcon } from "./TableIcon";

export class TableHeader extends React.PureComponent<TableHeaderProps> {
  render() {
    const { isActiveTable } = this.props;
    const columnGroup = (
      <colgroup>
        <col style={{ width: "5%" }} className="t2dm-actions-column" />
        <col style={{ width: " 20%" }} className="t2dm-name-column" />
        <col style={{ width: " 25%" }} className="t2dm-details-column" />
        <col style={{ width: " 13%" }} className="t2dm-efficacy-column" />
       {!isActiveTable && <col style={{ width: " 10%" }} className="t2dm-costs-column" />} 
        <col
          style={{ width: " 12%" }}
          className="t2dm-considerations-benefits"
        />
        <col style={{ width: " 15%" }} className="t2dm-considerations-risks" />
      </colgroup>
    );
    const getEfficacy = () => {
      return (
        <th id="efficayPopper" className="t2dm-efficacy-column">
          <TablePopover placement="top" targetId="efficayPopper">
            <div className="header">Efficacy:</div>
            <p>Defined by power to lower glucose levels</p>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <EfficacyIcon name="highest"></EfficacyIcon>
                    </td>
                    <td> {"> 1.2 mg/dL"}</td>
                  </tr>
                  <tr>
                    <td>
                      <EfficacyIcon name="high"></EfficacyIcon>
                    </td>
                    <td> {" 0.8 to 1.2 mg/dL"}</td>
                  </tr>
                  <tr>
                    <td>
                      <EfficacyIcon name="medium"></EfficacyIcon>
                    </td>

                    <td>{" 0.5 to 0.8 mg/dL"}</td>
                  </tr>
                  <tr>
                    <td>
                      <EfficacyIcon name='low'></EfficacyIcon>
                    </td>
                    <td>{" < 0.5 mg/dL"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TablePopover>
          Efficacy <i className="fas fa-info-circle" />
        </th>
      );
    };
    const getPatientCost = () => {
        return (
          <th
            id="costPopper"
            className="sorter-text text-left t2dm-costs-column"
          >
            <TablePopover placement="top" targetId="costPopper">
              Average Wholesale Price for 30 days supply
            </TablePopover>
            Wholesale <i className="fas fa-info-circle" />
          </th>
        );
      }
    ;
    const getBenefits = () => {
      return (
        <th
          id="benefitPopper"
          className="text-right t2dm-considerations-benefits"
        >
          <TablePopover placement="top" targetId="benefitPopper">
            <div>
              <div className="header">Benefits</div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <BenefitIcon
                          name="liver"
                          reqTooltip={false}
                        ></BenefitIcon>
                      </div>
                    </td>
                    <td>Liver/Hepatic</td>
                  </tr>
                  <tr>
                    <td>
                      <BenefitIcon
                        name="kidney"
                        reqTooltip={false}
                      ></BenefitIcon>
                    </td>
                    <td>Kidney/Renal</td>
                  </tr>
                  <tr>
                    <td>
                      <BenefitIcon
                        name="heart"
                        reqTooltip={false}
                      ></BenefitIcon>
                    </td>
                    <td>Heart/Cardiac</td>
                  </tr>
                  <tr>
                    <td>
                      <BenefitIcon
                        name="weight"
                        reqTooltip={false}
                      ></BenefitIcon>
                    </td>
                    <td>Weight Loss</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TablePopover>
          Benefits <i className="fas fa-info-circle" />
        </th>
      );
    };
    const getRisk = () => {
      return (
        <th id="riskPopper" className="text-left t2dm-considerations-risks">
          Risks <i className="fas fa-info-circle" aria-hidden="true"></i>
          <TablePopover placement="top" targetId="riskPopper">
            <div>
              <div className="header">Risks</div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <RiskIcon name="liver"></RiskIcon>
                    </td>
                    <td>Liver/Hepatic</td>
                  </tr>
                  <tr>
                    <td>
                      <RiskIcon name="kidney"></RiskIcon>
                    </td>
                    <td>Kidney/Renal</td>
                  </tr>
                  <tr>
                    <td>
                      <RiskIcon name="heart"></RiskIcon>
                    </td>
                    <td>Heart/Cardiac</td>
                  </tr>
                  <tr>
                    <td>
                      <RiskIcon name="hypoglycemia"></RiskIcon>
                    </td>
                    <td>Hypoglycemia</td>
                  </tr>

                  <tr>
                    <td>
                      <RiskIcon name="weight"></RiskIcon>
                    </td>
                    <td>Weight Gain</td>
                  </tr>
                  <tr>
                    <td>
                      <RiskIcon name="alcohol"></RiskIcon>
                    </td>
                    <td>Interacts with Alcohol</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TablePopover>
        </th>
      );
    };
    const getDetails = () => {
      if (isActiveTable) {
        return <th className="t2dm-details-column"> Details</th>;
      } else {
        return (
          <th className="t2dm-details-column" id="details-col">
            <TablePopover placement="top" targetId="details-col">
              Recommended F/U interval to review home monitored glucose
              <br />
              for pattern/efficacy, and for side effects.
              <br />
              <br />
              Increase dose or add additional agent(s) if patient is not
              achieving goals.
            </TablePopover>
            <span>Medication Details</span>{" "}
            <i className="fas fa-info-circle"></i>
          </th>
        );
      }
    };

    const getColumHead = () => {
      const colMedicationName = (
        <th className="t2dm-name-column">Medication</th>
      );
      const colMedicationDetails = getDetails();
      const colEfficacy = getEfficacy();
      const colPatientCost = isActiveTable? null : getPatientCost();
      const colBenefits = getBenefits();
      const colRisk = getRisk();
      const colAction = (
        <th className="t2dm-actions-column">
          {" "}
          Action{" "}
        </th>
      );
      return [
        colAction,
        colMedicationName,
        colMedicationDetails,
        colEfficacy,
        colPatientCost,
        colBenefits,
        colRisk,
      ];
    };
    return (
      <>
        {columnGroup}
        <thead>
          <tr className='table-head-row'>
            {getColumHead().map((item, index) => {
              if(item){
              return <Fragment key={index}>{item}</Fragment>;
              }
            })}
          </tr>
        </thead>
        {!isActiveTable && true &&  <tr className='drug-discontinue-warning'>
          <td colSpan={isActiveTable ? 6 : 7}>
            <div className='warning-msg'>When discontinuing Janumet, consider adding metFORMIN.</div>
          </td>

        </tr>}
      </>
    );
  }
}
