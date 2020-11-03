// Generated with util/create-component.js
import React, { Component } from "react";
import _get from "lodash/get";
import _has from "lodash/has";
import { fhirVersions } from "../../common";

import { allergyT2DMProps, allergy } from "./allergy.types";

import "./allergy.scss";

export class AllergyT2DMComponent extends Component<allergyT2DMProps> {
  render() {
    const { rows, fhirVersion } = this.props;

    const renderBody = (fhirResourceData: allergy) => {
      // debugger;
      return (
        <tr>
          <td> {fhirResourceData.title} </td>

          <td> {fhirResourceData.recordedDate}</td>
          <td> {fhirResourceData.category}</td>
          <td> {fhirResourceData.type}</td>
          <td>{fhirResourceData.note}</td>
        </tr>
      );
    };

    return (
      <div data-testid="allery">
        <div className="caption"> Allergy List</div>
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col150">Title</th>

              <th className="col50">Recorded Date</th>
              <th className="col50">Category</th>
              <th className="col50">Type</th>
              <th className="col100">Note</th>
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

export default AllergyT2DMComponent;
