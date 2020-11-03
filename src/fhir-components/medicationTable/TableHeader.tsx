import React, { Fragment } from "react";

import {
  medicationTableProps,
  TableHeaderProps,
} from "./medicationTable.types";
import TablePopover from "./TablePopover";
import "./medicationTable.scss";
import { Popover } from "reactstrap";

export class TableHeader extends React.Component<TableHeaderProps> {
  render() {
    const { isActiveTable } = this.props;
    const columnGroup = (
      <colgroup>
        <col style={{ width: " 20%" }} className="t2dm-name-column" />
        <col style={{ width: " 25%" }} className="t2dm-details-column" />
        <col style={{ width: " 13%" }} className="t2dm-efficacy-column" />
        <col style={{ width: " 7%" }} className="t2dm-costs-column" />
        <col
          style={{ width: " 15%" }}
          className="t2dm-considerations-benefits"
        />
        <col style={{ width: " 15%" }} className="t2dm-considerations-risks" />
        <col style={{ width: "5%" }} className="t2dm-actions-column" />
      </colgroup>
    );
    const getEfficay = () => {
      return (
        <th id="efficayPopper" className="text-left t2dm-efficacy-column">
          <TablePopover placement="top" targetId="efficayPopper">
            <div className="header">Efficacy:</div>
            <label>Defined by power to lower glucose levels</label>
            <div>
              <div className="efficacy highest-efficacy">Highest</div>{" "}
              {" > 1.2 mg/dL"}
            </div>
            <div className="mt-1">
              <div className="efficacy high-efficacy">High</div>
              {" 0.8 to 1.2 mg/dL"}
            </div>
            <div className="mt-1">
              <div className="efficacy intermediate-efficacy">Intermediate</div>
              {" 0.5 to 0.8 mg/dL"}
            </div>
            <div className="mt-1">
              <div className="efficacy low-efficacy">Low</div>
              {" < 0.5 mg/dL"}
            </div>
          </TablePopover>
          Efficacy <i className="fas fa-info-circle" />
        </th>
      );
    };
    const getPatientCost = () => {

      if(isActiveTable){

      return (
        <th id="costPopper" className="sorter-text text-left t2dm-costs-column">
          <TablePopover placement="top" targetId="costPopper">
            Current patient cost for 30 days supply based on <br /> patient's
            insurance (UnitedHealthcare)"
          </TablePopover>
          Patient Cost <i className="fas fa-info-circle" />
        </th>
      );}else{
        return (
          <th id="costPopper" className="sorter-text text-left t2dm-costs-column">
            <TablePopover placement="top" targetId="costPopper">
            Average Wholesale Price for 30 days supply
            </TablePopover>
            Price <i className="fas fa-info-circle" />
          </th>)

      }
    };
    const getBenifits = () => {
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
                      img
                      {/*<img
                      src="benefit-to-liver.svg"
                      alt="Liver benefit"
                      className="mb-1 consideration-liver-hepatic"
                      />*/}
                    </td>
                    <td>Liver/Hepatic</td>
                  </tr>
                  <tr>
                    <td>
                      <i
                        className="fad fa-kidneys consideration-benefit"
                        aria-hidden="true"
                      ></i>
                    </td>
                    <td>Kidney/Renal</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mb-1 fas fa-heart consideration-benefit-solid"></i>
                    </td>
                    <td>Heart/Cardiac</td>
                  </tr>
                  <tr>
                    <td>
                      <i
                        className="fad fa-balance-scale-left consideration-benefit"
                        aria-hidden="true"
                      ></i>
                    </td>
                    <td>Weight Loss</td>
                  </tr>
                  <tr className="hidden">
                    <td>
                      <i className="mb-1 fad fa-dollar-sign consideration-benefit"></i>
                    </td>
                    <td>Low Cost</td>
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
                      img
                      {/* <img
                      src="/static/benefit-to-liver.svg"
                      alt="Liver risk"
                      className="mb-1 consideration-liver-hepatic"
                    />{" "} */}
                    </td>
                    <td>Liver/Hepatic</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mb-1 fad fa-kidneys consideration-risk"></i>
                    </td>
                    <td>Kidney/Renal</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mb-1 fas fa-heart consideration-risk-solid"></i>
                    </td>
                    <td>Heart/Cardiac</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      img
                      {/* <img
                      src="hypoglycemia.svg"
                      alt="Low blood sugar"
                      className="mb-1 consideration-hypoglycemia"
                    /> */}
                    </td>
                    <td>Hypoglycemia</td>
                  </tr>

                  <tr>
                    <td>
                      <i className="mb-1 fad fa-balance-scale-right consideration-risk"></i>
                    </td>
                    <td>Weight Gain</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mb-1 far fa-wine-glass consideration-risk-solid"></i>
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
        return <th className="text-left t2dm-details-column"> Details</th>;
      } else {
        return (
          <th className="text-left t2dm-details-column" id="details-col">
            <TablePopover placement="top" targetId="details-col">

                Recommended F/U interval to review home monitored glucose
                <br />
                for pattern/efficacy, and for side effects.
                <br />
                <br />
                Increase dose or add additional agent(s) if patient is not
                achieving goals.
            </TablePopover>
            <span>Medication Details</span> <i className="fas fa-info-circle"></i>
          </th>
        );
      }
    };

    const getColumHead = () => {
      const colMedicationName = (
        <th className="text-left t2dm-name-column">Medication</th>
      );
      const colMedicationDetails = (getDetails()   );
      const colEfficay = getEfficay();
      const colPatienCost = getPatientCost();
      const colBenefits = getBenifits();
      const colRisk = getRisk();
      const colAction = (
        <th className="text-center t2dm-actions-column t2dm-active-medication-change">
          {" "}
          Action{" "}
        </th>
      );
      return [
        colMedicationName,
        colMedicationDetails,
        colEfficay,
        colPatienCost,
        colBenefits,
        colRisk,
        colAction,
      ];
    };
    return (
      <>
        {columnGroup}
        <thead>
          <tr>
            {getColumHead().map((item, index) => {
              return <Fragment key={index}>{item}</Fragment>;
            })}
          </tr>
        </thead>
      </>
    );
  }
}
