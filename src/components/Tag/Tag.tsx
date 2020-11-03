// Generated with util/create-component.js
import React,{Component} from "react";
import { TagProps } from "./Tag.types";
import cx from "classnames";
import "./Tag.scss";
import { Classes } from "../../common";

export class Tag extends Component<TagProps> {
  inputRef: React.RefObject<HTMLDivElement>;
  fill: any;
  intent: any;
  interactive: any;
  large: any;
  minimal: any;
  round: any;
  constructor(props) {
    super(props);
    this.state = {
      _className: "",
      p_width: "",
    };
    this.inputRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    var p_width = this.inputRef["current"].parentNode["clientWidth"];
    this.setState({ p_width: p_width });
  }

  render() {
    this.fill =
      this.props.fill === undefined || this.props.fill === false
        ? "noFill"
        : "Fill";
    this.interactive =
      this.props.interactive === undefined || this.props.interactive === false
        ? "notInteractive"
        : "Interactive";
    this.large =
      this.props.large === undefined || this.props.large === false
        ? "notLarge"
        : "large";
    this.minimal =
      this.props.minimal === undefined || this.props.minimal === false
        ? "notMinimal"
        : "Minimal";
    this.round =
      this.props.round === undefined || this.props.round === false
        ? "notRound"
        : "Round";
    this.intent =
      this.props.intent === undefined ? "primary" : this.props.intent;
    // debugger;
    var _className = cx(
      Classes.activeClass("active"),
      Classes.fillClass(this.fill),
      Classes.interactiveClass(this.interactive),
      Classes.sizeClass(this.large),
      Classes.minimalClass(this.minimal),
      Classes.roundClass(this.round),
      Classes.intentTagClass(this.intent),
      Classes
    );
    if (this.fill == "Fill") {
      return (
        <div
          className={_className}
          style={{ width: this.state["p_width"] }}
          ref={this.inputRef}
        >
          {this.props.children}
        </div>
      );
    }
    console.log(_className);
    return (
      <div className={_className} ref={this.inputRef}>
        {this.props.children}
      </div>
    );
  }
}

export default Tag;
