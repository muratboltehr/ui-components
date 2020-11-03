// Generated with util/create-component.js
import React from "react";
import _get from "lodash/get";
import _has from "lodash/has";

import "./medicationStatement.scss";

import {
  medicationStatementFlatProps,
  medication,
} from "./medicationStatementFlat.types";

export class MedicationStatementT2DMComponent extends React.Component<
  medicationStatementFlatProps
> {
  render() {
    const DEFAULT_TITLE = "Medication Statement";
    const { rows } = this.props;

    const renderMedicationRequestBody = (medication: medication) => {
      // const { name, dose, frequency, startDate } = medication;

      const medicationDetails = medication.name.split(/\s+/);
      if (medication.dose.trim() === "") {
        if (medicationDetails.length > 6) {
          medication.dose =
            medicationDetails[1] +
            " " +
            medicationDetails[2] +
            " " +
            medicationDetails[3] +
            "<br>" +
            medicationDetails[4] +
            " " +
            medicationDetails[5] +
            " " +
            medicationDetails[6];
        } else {
          const dosage =
            medicationDetails.length > 1 ? medicationDetails[1] : "";
          const dosageUnits =
            medicationDetails.length > 2 ? medicationDetails[2] : "";

          medication.dose = dosage + " " + dosageUnits;
        }
      }
      debugger;
      if (medication.route ?? "" === "") {
        const routeIndex = medicationDetails.length > 6 ? 6 : 3;
        medication.route = medicationDetails.slice(routeIndex).join(" ");
        if (medication.route.match(/Auto-Injector/i)) {
          medication.route = "Sub-Q";
        }
      }
      if (medication.frequency ?? "" === "") {
        medication.frequency = "&mdash;";
      }

      return (
        <tr>
          <td> {medicationDetails[0]} </td>
          <td>{medication.dose}</td>
          <td>{medication.frequency}</td>
          <td>{medication.route}</td>
          <td>{medication.startDate}</td>
        </tr>
      );
    };

    return (
      <div data-testid="medicationStatement">
        <div className="caption"> {this.props.caption}</div>
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col125">Medications</th>
              <th className="col100">Dose</th>
              <th className="col50">Freq</th>
              <th className="col100">Route</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((fhirResource) => {
              return renderMedicationRequestBody(fhirResource);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MedicationStatementT2DMComponent;
