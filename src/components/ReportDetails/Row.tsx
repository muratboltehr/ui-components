import React from "react";
import classNames from "classnames";
import { Classes } from "../../common";
import Divider from "../Divider/Divider";

export class ReportTableRow extends React.Component {
  render() {
    return (
      <tr className={Classes.REPORT_ROW}>
        <td className="reportcell">Dulaglutide (Trulicity)</td>
        <td className="reportcell">All</td>
        <td className="reportcell">All</td>
        <td className="reportcell">100%</td>
        <td className="reportcell">0%</td>
      </tr>
    );
  }
}
