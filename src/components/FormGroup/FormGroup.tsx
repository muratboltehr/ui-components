// Generated with util/create-component.js
import React from "react";

import { FormGroupProps } from "./FormGroup.types";
import {Intent} from '../../common';
import { AbstractPureComponent2, Classes } from "../../common";
import "./FormGroup.scss";
import classNames from 'classnames';

export class FormGroup extends AbstractPureComponent2<FormGroupProps> {
  // public static displayName = `${DISPLAYNAME_PREFIX}.FormGroup`;

  public render() {
      const { children, contentClassName, helperText, label, required,placeholder=' ',isInvalid=false ,disabled=false} = this.props;
      return (
        <div className={this.getClass()}>
        <input  className={`form-input ${isInvalid && 'input-invalid'} ${disabled && Classes.DISABLED}`} placeholder={placeholder.length === 0 ? ' ' : placeholder} disabled={disabled}/>
      {label && <label className={`form-input-label ${required && 'label-required'}`}> {label}</label>}
       </div>
      );
  }

  private getClass() {
      const {  disabled, inline, intent ,contentClassName} = this.props; 
      return classNames(
          Classes.FORM_GROUP,
          Classes.intentClass(intent),
          {
              [Classes.INLINE]: inline
          },
          contentClassName
          
      );
  }
}