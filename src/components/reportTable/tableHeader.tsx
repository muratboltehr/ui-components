import React from "react";
import classNames from "classnames";
import { reportTableRowProps } from "./reportTable.types";
import { Classes } from "../../common";

export class ReportHeader extends React.Component {
  render() {
    return (
      <tr className="tableheader">
        <td className="tabletitle">Prescription</td>
        <td className="tabletitle">Description</td>
        <td className="tabletitle">Actions</td>
      </tr>
    );
  }
}
