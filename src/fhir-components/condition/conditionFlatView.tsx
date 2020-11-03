// Generated with util/create-component.js
import React from "react";
import _get from "lodash/get";
import _has from "lodash/has";
import { fhirVersions } from "../../common";

import { problemListT2DMProps, Condition } from "./condition.types";

import "./condition.scss";

export class ConditionT2DMComponent extends React.Component<
  problemListT2DMProps
> {
  render() {
    const { rows } = this.props;
    // let fhirResourceData;

    const renderBody = (fhirResourceData: Condition) => {
      return (
        <tr>
          <td> {fhirResourceData.name} </td>
          <td>({fhirResourceData.code})</td>
          <td>Recorded on {fhirResourceData.recordedOn}</td>
        </tr>
      );
    };

    return (
      <div data-testid="problemList">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col150"></th>
              <th className="col50"></th>
              <th className="col150"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((fhirResource) => {
              return renderBody(fhirResource);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConditionT2DMComponent;
