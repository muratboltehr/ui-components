import React from "react";
import classNames from "classnames";
import { Classes } from "../../common";

export class ReportTableHeader extends React.Component {
  render() {
    return (
      <div>
        <tr className="tabletitle">
          <td>
            <p className="maintitle">Applied Filters:</p>{" "}
            <p className="sidetitle">None</p>
          </td>
        </tr>
        <tr className="tablecolunm">
          <td className="tableheadertitle">Prescription</td>
          <td className="tableheadertitle">Pod</td>
          <td className="tableheadertitle">Center</td>
          <td className="tableheadertitle">On-guideline (%)</td>
          <td className="tableheadertitle">Off-guideline (%)</td>
        </tr>
      </div>
    );
  }
}
