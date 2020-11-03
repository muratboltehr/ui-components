import React,{Component} from "react";
import "./Template.scss";
import { TemplateProps } from "./Template.types";

export class Template extends Component<TemplateProps> {
  render() {
    return (
      <div
        data-testid="test-component"
        className={`test-component test-component-${this.props.theme}`}
      >
        <h1 className="heading">I'm the test component watch</h1>
        <h2>Using Class</h2>
      </div>
    );
  }
}

export default Template;
