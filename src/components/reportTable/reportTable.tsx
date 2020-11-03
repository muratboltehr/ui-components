// Generated with util/create-component.js
import React from "react";

import { reportTableRowProps } from "./reportTable.types";

import "./reportTable.scss";
import { Classes } from "../../common";
import { TableHeader } from "../../fhir-components/medicationTable/TableHeader";
import { ReportHeader } from "./tableHeader";
import { ReportRow } from "./tableRow";

export class ReportTable extends React.Component {
  render() {
    return (
      <div data-testid="reportTable" className="mainpage">
        <div className="title">
          <p>Reports</p>
        </div>
        <div className="summary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar sic
            tempor.
          </p>
        </div>
        <div className="table">
          <ReportHeader />
          <ReportRow />
        </div>
      </div>
    );
  }
}

export default ReportTable;
