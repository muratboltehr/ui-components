// Generated with util/create-component.js
import React,{Component} from "react";
import _get from "lodash/get";
import _has from "lodash/has";
import { fhirVersions } from "../../common";

import { allergyProps } from "./allergy.types";

import "./allergy.scss";

export class AllergyComponent extends Component<allergyProps> {
  render() {
    const { rows, fhirVersion } = this.props;
    let fhirResourceData;
    const commonDTO = (fhirResource) => {
      const hasReaction = _get(fhirResource, "reaction[0].manifestation");
      const reaction = _get(fhirResource, "reaction", []);
      const asserter = _get(fhirResource, "asserter");
      const type = _get(fhirResource, "type");
      const category = _get(fhirResource, "category");
      const patient = _get(fhirResource, "patient");

      return {
        hasReaction,
        reaction,
        asserter,
        type,
        category,
        patient,
      };
    };

    const r4DTO = (fhirResource) => {
      const title = _get(fhirResource, "code.coding[0].display");
      const status = _get(fhirResource, "verificationStatus.coding[0].display");
      const recordedDate = _get(fhirResource, "recordedDate");
      let substanceCoding = _get(fhirResource, "reaction", []).filter((item) =>
        _get(item, "substance.coding")
      );
      // substanceCoding = _get(substanceCoding, "0.substance.coding");
      substanceCoding = "";
      const hasSubstanceCoding =
        Array.isArray(substanceCoding) && substanceCoding.length > 0;
      const note = _get(fhirResource, "note");
      const hasNote = Array.isArray(note);

      return {
        title,
        status,
        recordedDate,
        substanceCoding,
        hasSubstanceCoding,
        note,
        hasNote,
      };
    };
    const stu3DTO = (fhirResource) => {
      const title = _get(fhirResource, "code.coding[0].display");
      const status = _get(fhirResource, "verificationStatus");
      const recordedDate = _get(fhirResource, "assertedDate");
      let substanceCoding = _get(fhirResource, "reaction", []).filter((item) =>
        _get(item, "substance.coding")
      );
      substanceCoding = _get(substanceCoding, "0.substance.coding");
      const hasSubstanceCoding =
        Array.isArray(substanceCoding) && substanceCoding.length > 0;
      const note = _get(fhirResource, "note");
      const hasNote = Array.isArray(note);
      return {
        title,
        status,
        recordedDate,
        substanceCoding,
        hasSubstanceCoding,
        note,
        hasNote,
      };
    };

    const dstu2DTO = (fhirResource) => {
      const title =
        _get(fhirResource, "substance.coding[0].display") ||
        _get(fhirResource, "substance.text", "");
      const status = _get(fhirResource, "status", "");
      const recordedDate = _get(fhirResource, "recordedDate");
      const substanceCoding = _get(fhirResource, "substance.coding");
      const hasSubstanceCoding = Array.isArray(substanceCoding);
      const asserter = _get(fhirResource, "reporter");

      return {
        title,
        status,
        recordedDate,
        substanceCoding,
        hasSubstanceCoding,
        asserter,
      };
    };

    const resourceDTO = (fhirVersion, fhirResource) => {
      switch (fhirVersion) {
        case fhirVersions.DSTU2: {
          return {
            ...commonDTO(fhirResource),
            ...dstu2DTO(fhirResource),
          };
        }
        case fhirVersions.STU3: {
          return {
            ...commonDTO(fhirResource),
            ...stu3DTO(fhirResource),
          };
        }
        case fhirVersions.R4: {
          // there are not any breaking changes between STU3 and R4 version
          return {
            ...commonDTO(fhirResource),
            ...r4DTO(fhirResource),
          };
        }

        default:
          throw Error("Unrecognized the fhir version property type.");
      }
    };

    const renderBody = (fhirResourceData) => {
      const {
        title,
        status,
        recordedDate,
        substanceCoding,
        hasSubstanceCoding,
        hasReaction,
        reaction,
        asserter,
        hasNote,
        note,
        type,
        category,
        patient,
      } = fhirResourceData;
      // debugger;
      return (
        <tr>
          <td> {title} </td>
          
          <td> {recordedDate}</td>
          <td> {category}</td>
          <td> {type}</td>
          <td>{hasNote ? note[0].text : ""}</td>
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
              fhirResourceData = resourceDTO(fhirVersion, fhirResource);
              return renderBody(fhirResourceData);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllergyComponent;
