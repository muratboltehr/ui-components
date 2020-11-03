// Generated with util/create-component.js
import React from "react";
import _get from "lodash/get";
import _has from "lodash/has";
import { fhirVersions } from "../../common";

import { problemListProps } from "./condition.types";

import "./condition.scss";

export class ConditionComponent extends React.Component<problemListProps> {
  render() {
    const { rows, fhirVersion } = this.props;
    let fhirResourceData;

    const commonDTO = (fhirResource) => {
      // debugger;
      const codeText =
        _get(fhirResource, "code.coding[0].display") ||
        _get(fhirResource, "code.text") ||
        _get(fhirResource, "code.coding[0].code");
      const severityText =
        _get(fhirResource, "severity.coding[0].display") ||
        _get(fhirResource, "severity.text");
      const onsetDateTime = _get(fhirResource, "onsetDateTime");
      const hasAsserter = _has(fhirResource, "asserter");
      const asserter = _get(fhirResource, "asserter");
      const hasBodySite = _get(fhirResource, "bodySite[0].coding[0].display");
      const bodySite = _get(fhirResource, "bodySite");
      const code = _get(fhirResource, "code.coding[0].code");

      return {
        codeText,
        severityText,
        onsetDateTime,
        hasAsserter,
        asserter,
        hasBodySite,
        bodySite,
        code,
      };
    };

    const dstu2DTO = (fhirResource) => {
      const clinicalStatus = _get(fhirResource, "clinicalStatus");
      const dateRecorded = _get(fhirResource, "dateRecorded");
      return {
        clinicalStatus,
        dateRecorded,
      };
    };

    const stu3DTO = (fhirResource) => {
      const clinicalStatus = _get(fhirResource, "clinicalStatus");
      const dateRecorded = _get(fhirResource, "assertedDate");
      return {
        clinicalStatus,
        dateRecorded,
      };
    };

    const r4DTO = (fhirResource) => {
      const clinicalStatus = _get(
        fhirResource,
        "clinicalStatus.coding[0].code"
      );
      const dateRecorded = _get(fhirResource, "recordedDate");
      return {
        clinicalStatus,
        dateRecorded,
      };
    };

    const resourceDTO = (fhirVersion, fhirResource) => {
      let combineFhirResource;
      switch (fhirVersion) {
        case fhirVersions.DSTU2: {
          combineFhirResource = {
            ...commonDTO(fhirResource),
            ...dstu2DTO(fhirResource),
          };
          return combineFhirResource;
        }
        case fhirVersions.STU3: {
          combineFhirResource = {
            ...commonDTO(fhirResource),
            ...stu3DTO(fhirResource),
          };
          return combineFhirResource;
        }
        case fhirVersions.R4: {
          // there are not any breaking changes between STU3 and R4 version
          combineFhirResource = {
            ...commonDTO(fhirResource),
            ...r4DTO(fhirResource),
          };
          return combineFhirResource;
        }

        default:
          throw Error("Unrecognized the fhir version property type.");
      }
    };

    const renderBody = (fhirResourceData) => {
      const {
        codeText,
        code,
        severityText,
        onsetDateTime,
        hasAsserter,
        asserter,
        hasBodySite,
        bodySite,
        clinicalStatus,
        dateRecorded,
      } = fhirResourceData;
      return (
        <tr>
          <td> {codeText} </td>
          <td>({code})</td>
          <td>Recorded on {dateRecorded}</td>
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
              fhirResourceData = resourceDTO(fhirVersion, fhirResource);
              return renderBody(fhirResourceData);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConditionComponent;
