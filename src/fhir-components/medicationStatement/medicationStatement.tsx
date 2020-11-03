// Generated with util/create-component.js
import React from "react";
import _get from "lodash/get";
import _has from "lodash/has";
import { fhirVersions } from "../../common";
import { Table } from "react-bootstrap";

import { medicationStatementProps } from "./medicationStatement.types";

import "./medicationStatement.scss";
// import moment from "moment";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export class MedicationStatementComponent extends React.Component<
  medicationStatementProps
> {
  render() {
    const DEFAULT_TITLE = "Medication Statement";

    const commonMedicationStatementDTO = (fhirResource) => {
      const status = _get(fhirResource, "status", "");
      const hasEffectivePeriod = _has(fhirResource, "effectivePeriod");
      const statusDesc = {
        from: _get(fhirResource, "effectivePeriod.start"),
        to: _get(fhirResource, "effectivePeriod.end"),
      };
      const reported =
        _get(fhirResource, "reported") === true ? " - self reported" : "";

      const contained = _get(fhirResource, "contained");
      const hasMedications = Array.isArray(contained);
      const hasDosage = Array.isArray(_get(fhirResource, "dosage"));
      const reasonCode = _get(fhirResource, "reasonCode");
      const hasReasonCode = Array.isArray(reasonCode);
      const medicationReference = _get(fhirResource, "medicationReference");
      const startDate = _get(fhirResource, "dateAsserted");

      return {
        status,
        hasEffectivePeriod,
        statusDesc,
        reported,
        hasMedications,
        hasDosage,
        reasonCode,
        hasReasonCode,
        contained,
        medicationReference,
        startDate,
      };
    };

    const dstu2MedicationStatementDTO = (fhirResource) => {
      const title = _get(
        fhirResource,
        "medicationCodeableConcept.text",
        _get(
          fhirResource,
          "medicationCodeableConcept.coding[0].display",
          DEFAULT_TITLE
        )
      );
      const dosageValue =
        _get(fhirResource, "dosage[0].doseRange.low.value") +
        "-" +
        _get(fhirResource, "dosage[0].doseRange.high.value") +
        "-" +
        _get(fhirResource, "dosage[0].doseRange.high.unit");

      const dosageFrequency =
        _get(fhirResource, "dosage[0].timing.repeat.frequency") +
        " " +
        _get(fhirResource, "dosage[0].timing.repeat.periodUnit");

      const route = _get(fhirResource, "dosage[0].route.coding[0].display");
      return {
        title,
        dosageValue,
        dosageFrequency,
        route,
      };
    };

    const stu3MedicationStatementDTO = (fhirResource) => {
      const title = _get(
        fhirResource,
        "medicationCodeableConcept.text",
        _get(
          fhirResource,
          "medicationCodeableConcept.coding[0].display",
          DEFAULT_TITLE
        )
      );
      const dosageValue =
        _get(fhirResource, "dosage[0].doseQuantity.value") +
        " " +
        _get(fhirResource, "dosage[0].doseQuantity.unit");

      const route = _get(fhirResource, "dosage[0].route.coding[0].display");

      const dosageFrequency = _get(fhirResource, "dosage[0].text");
      const reasonCode = _get(fhirResource, "reasonCode");
      const hasReasonCode = Array.isArray(reasonCode);
      const note = _get(fhirResource, "note");
      const hasNote = _has(fhirResource, "note.0.text");
      return {
        title,
        reasonCode,
        hasReasonCode,
        hasNote,
        note,
        dosageValue,
        dosageFrequency,
        route,
      };
    };

    function getMedicationFrequencyAsString(frequency, periodUnit) {
      let frequencyString = "";
      switch (periodUnit) {
        case "d":
          switch (frequency) {
            case 1:
              frequencyString = "QD";
              break;
            case 2:
              frequencyString = "BID";
              break;
          }
          break;
      }
      return frequencyString;
    }

    const commonMedicationRequestDTO = (fhirResource) => {
      const medicationCodeableConcept = _get(
        fhirResource,
        "medicationCodeableConcept.coding[0]"
      );
      const medicationDetails = medicationCodeableConcept.display.split(/\s+/);

      const name = medicationDetails[0];
      const code = medicationCodeableConcept.code;
      const authoredOn = fhirResource.authoreOn;
      const dosageInstruction = fhirResource.dosageInstruction;
      let frequency = "";
      let dosage = "";
      let dosageUnits = "";
      let route = "";

      if (dosageInstruction !== undefined) {
        const instructions = dosageInstruction[0];
        //frequency
        if (dosageInstruction[0].asNeededBoolean) {
          frequency = "PRN";
        }

        if (instructions.timing) {
          frequency = getMedicationFrequencyAsString(
            instructions.timing.repeat.frequency,
            instructions.timing.repeat.periodUnit
          );
        }
        //dosage and dosageunit
        if (instructions.doseAndRate) {
          const doseRate = instructions.doseAndRate[0];
          dosage = doseRate.doseQuantity.value
            ? doseRate.doseQuantity.vaule
            : "";
          dosageUnits = doseRate.doseQuantity.unit
            ? doseRate.doseQuantity.unit
            : "";
        }
        //routes
        if (instructions.route) {
          route =
            instructions.route.coding && instructions.route.coding.display
              ? instructions.route.coding.display
              : "";
        }
      }

      // Parse the medicatino details
      if (frequency === "") {
        frequency = "&mdash;";
      }

      if (dosage === "") {
        if (medicationDetails.lenght > 6) {
          dosage =
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
          dosageUnits = "";
        } else {
          dosage = medicationDetails.length > 1 ? medicationDetails[1] : "";
          dosageUnits =
            medicationDetails.length > 2 ? medicationDetails[2] : "";
        }
      }

      if (route === "") {
        const routeIndex = medicationDetails.length > 6 ? 6 : 3;
        route = medicationDetails.slice(routeIndex).join(" ");
        if (route.match(/Auto-Injector/i)) {
          route = "Sub-Q";
        }
      }

      return {
        name,
        code,
        authoredOn,
        frequency,
        dosage,
        dosageUnits,
        route,
      };
    };

    const medicationStatementDTO = (fhirVersion, fhirResource) => {
      switch (fhirVersion) {
        case fhirVersions.DSTU2: {
          return {
            ...commonMedicationStatementDTO(fhirResource),
            ...dstu2MedicationStatementDTO(fhirResource),
          };
        }
        case fhirVersions.STU3: {
          return {
            ...commonMedicationStatementDTO(fhirResource),
            ...stu3MedicationStatementDTO(fhirResource),
          };
        }
        case fhirVersions.R4: {
          // there are not any breaking changes between STU3 and R4 version
          return {
            ...commonMedicationStatementDTO(fhirResource),
            ...stu3MedicationStatementDTO(fhirResource),
          };
        }

        default:
          throw Error("Unrecognized the fhir version property type.");
      }
    };
    const { rows, fhirVersion } = this.props;

    const renderMedicationStatementBody = (fhirResourceData) => {
      const {
        hasMedications,
        title,
        contained,
        dosageValue,
        dosageFrequency,
        route,
        startDate,
      } = fhirResourceData;
      return (
        <tr>
          <td>
            {" "}
            {hasMedications ? contained[0].code.coding[0].display : title}{" "}
          </td>
          <td>{dosageValue}</td>
          <td>{dosageFrequency}</td>
          <td>{route}</td>
          <td>{startDate}</td>
        </tr>
      );
    };

    const medicationRequestDTO = (fhirResource) => {
      return {
        ...commonMedicationRequestDTO(fhirResource),
      };
    };

    const renderMedicationRequestBody = (fhirResourceData) => {
      const {
        name,
        code,
        authoredOn,
        frequency,
        dosage,
        dosageUnits,
        route,
      } = fhirResourceData;
      return (
        <tr>
          <td> {name} </td>
          <td>
            {dosage} {dosageUnits}
          </td>
          <td>{frequency}</td>
          <td>{route}</td>
          <td>{authoredOn}</td>
        </tr>
      );
    };

    let fhirResourceData;

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
              // if (
              //   fhirResource.resourceType.toLowerCase() ===
              //   "medicationstatements"
              // ) {
              //   fhirResourceData = medicationStatementDTO(
              //     fhirVersion,
              //     fhirResource
              //   );
              //   return renderMedicationStatementBody(fhirResourceData);
              // } else if (
              //   fhirResource.resourceType.toLowerCase() === "medicationrequest"
              // ) {
              //   fhirResourceData = medicationRequestDTO(fhirResource);
              //   return renderMedicationRequestBody(fhirResourceData);
              // }

              // fhirResourceData = medicationStatementDTO(
              //   fhirVersion,
              //   fhirResource
              // );
              // return renderMedicationStatementBody(fhirResourceData);

              fhirResourceData = medicationRequestDTO(fhirResource);
              return renderMedicationRequestBody(fhirResourceData);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MedicationStatementComponent;
