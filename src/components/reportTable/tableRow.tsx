import React from "react";
import classNames from "classnames";
import { reportTableRowProps } from "./reportTable.types";
import { Classes } from "../../common";
import { Collapse } from "../Collapse/Collapse";
import { Button } from "../Button/Button";
import Divider from "../Divider/Divider";
import ReportDetails from "../ReportDetails/ReportDetails";
import Overlay from "../Overlay/Overlay";
import Portal from "../Portal/Portal";

export interface ICollapseExampleState {
  isOpen: boolean;
}

export class ReportRow extends React.Component {
  constructor(props: ICollapseExampleState) {
    super(props);
    this.handleOpenCollapse.bind(this);
  }
  public state: ICollapseExampleState = {
    isOpen: false,
  };
  handleOpenCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <tr className={Classes.REPORT_ROW}>
        <td className="reportcellcontent">
          Percent of Prescriptions On and Off Guideline
        </td>
        <td className="reportcelldescription">
          Displays medications your providers are prescribing that are useful
        </td>
        <td className="reportcelllink">
          <Button onClick={(e) => this.handleOpenCollapse()}>
            View Report
          </Button>
          <Collapse isOpen={this.state.isOpen}>
            <a href="http://localhost:6007/?path=/story/reportdetails--with-bar">
              View Report
            </a>
            <Divider orientation={"horizontal"} />
            <p>Export Report</p>
          </Collapse>
        </td>
      </tr>
    );
  }
}
