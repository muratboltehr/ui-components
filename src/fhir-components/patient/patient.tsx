// Generated with util/create-component.js
import React from "react";
import moment from "moment";
import { patientProps } from "./patient.types";

import "./patient.scss";

export class PatientComponent extends React.Component<patientProps> {
  render() {
    const patient = this.props.patient;
    const calculate_age = (dob1: any) => {
      var today = new Date();
      var birthDate = new Date(dob1);
      var age_now = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age_now--;
      }
      console.log(age_now);
      return age_now;
    };

    const gender = (patientgender: any) => {
      switch (patientgender) {
        case "male":
          return "M";
        case "female":
          return "F";
        default:
          return "O";
      }
    };
    return (
      <>
        {/* <header className="left pt-3">Patient Facts</header> */}

        <div className="row">
          <span className="col s5 fact-label">
            <h5>
              <span className="patient-facts-last-name">
                {patient.name[0].family}
              </span>
              ,{" "}
              <span className="patient-facts-first-name">
                {patient.name[0].given.join(" ")}
              </span>
            </h5>
          </span>
          <span className="col s7 texxt-right fact-label">
            <h5 className="pr-16">
              <span className="patient-facts-date-of-birth">
                {moment(patient.birthDate).format("DD-MMM-yyyy")} (
                {calculate_age(patient.birthDate)} yo) {gender(patient.gender)}
              </span>
            </h5>
          </span>
        </div>
      </>
    );
  }
}

export default PatientComponent;
