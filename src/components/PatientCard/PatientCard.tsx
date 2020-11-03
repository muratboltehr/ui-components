// Generated with util/create-component.js
import React from "react";

import { PatientCardProps } from "./PatientCard.types";

import "./PatientCard.scss";


export class PatientCard extends React.Component<PatientCardProps> {
  render() {
    return (
      <div data-testid="PatientCard" className="foo-bar">{this.props.foo}</div>
    );
  }
}

export default PatientCard;

