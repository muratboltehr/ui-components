// Generated with util/create-component.js
import React from "react";

import { ReportDetailsProps } from "./ReportDetails.types";

import "./ReportDetails.scss";
import { ReportTableRow } from "./Row";
import { ReportTableHeader } from "./Header";

export class ReportDetails extends React.Component {
  render() {
    return (
      <div data-testid="ReportDetails" className="mainpage">
        <div className="returnlink">
          <a href="http://localhost:6007/?path=/story/reporttable--with-bar">
            Return to Reports
          </a>
        </div>
        <div className="header">
          <p className="bigheader">Reports:</p>
          <p className="sideheader">
            Percentage of Prescriptions On and Off Guideline
          </p>
        </div>
        <div className="description">
          <p>
            This report displays the percentage of medications your providers
            are prescribing that are recommended, on-guideline, by the CDS App
            and the percentage of medications your providers are prescribing
            that are not recommended, off-guideline, by the CDS App.
          </p>
        </div>
        <div className="table">
          <ReportTableHeader />
          <ReportTableRow />
        </div>
      </div>
    );
  }
}

export default ReportDetails;
