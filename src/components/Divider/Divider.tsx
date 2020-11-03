import React,{Component} from "react";
import cx from "classnames";
import "./Divider.scss";
import { DividerProps } from "./Divider.types";
import { Classes, Orientation } from "../../common";

class Divider extends Component<DividerProps> {
  inputRef: React.RefObject<HTMLDivElement>;
  constructor(props: DividerProps) {
    super(props);
    this.state = { orientation: "", size: "", _className: "" };
    this.inputRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    var p_height=this.inputRef["current"].parentNode["clientHeight"];
    var p_width=this.inputRef["current"].parentNode["clientWidth"]
    var orient = this.props.orientation;
    orient =
      orient === undefined || orient === "vertical" ? "vertical" : "horizontal";
    const cName = cx(Classes.orientationClass(orient));
    setTimeout(() => {
      if (this.state["orientation"] === "") {
        this.setState({ orientation: orient });
      }
      if (this.state["size"] === "") {
        if(orient=="vertical"){
          this.setState({ size: p_height});
        }
        else{
          this.setState({ size: p_width });
        }
        
      }
      if (this.state["_className"] === "") {
        this.setState({ _className: cName });
      }
    });
  }

  componentDidUpdate(){
    if(this.state["orientation"]!= this.props.orientation){
      var stateset= {orientation: this.props.orientation,
      _className: cx(Classes.orientationClass(this.props.orientation))};
      this.setState(stateset);
    }
  }

  render() {
    if (this.state["orientation"] === "vertical") {
      return (
        <div 
        ref={this.inputRef} 
        className={this.state["_className"]} 
        ></div>
      );
    } else {
      return (
        <div
          ref={this.inputRef} 
          className={this.state["_className"]}
        ></div>
      );
    }
  }
}

export default Divider;
