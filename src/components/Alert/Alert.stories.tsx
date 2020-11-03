// Generated with util/create-component.js
import React, { useState } from "react";
import Alert from "./Alert";
import Button from "../Button/Button";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
export default {
  title: "Foundations/Alert",
  decorators: [withKnobs],
  component: Alert,
};

export const AlertKnobs = () => {
  const [propsData, setPropsData] = useState({
    confirmButtonText: "Confirm Button Text",
    cancelButtonText: " Cancel Button Text",
    canClickOutSideToClose: true,
    canEscapeKeyClose: false,
    isOpen: false,
  });

  const mystyle = {
    color: "black",
    padding: "10px",
    fontFamily: "Arial",
    textAlign: "center" as const,
    height: "30%",
    margin: "10% 10%",
  };

  const handleOpen = () => {
    setPropsData((prevState) => {
      return { ...prevState, isOpen: true };
    });
  };

  const handleCancel = () => {
    setPropsData((prevState) => {
      return { ...prevState, isOpen: false };
    });
  };

  const handleConfirm = () => {
    setPropsData((prevState) => {
      return { ...prevState, isOpen: false };
    });
  };
  console;
  return (
    <div style={mystyle}>
      <Button text="Delete the File" onClick={(e) => handleOpen()} />

      <Alert
        // isOpen={isOpen}
        {...propsData}
        canClickOutSideToClose={boolean("canOutsideClickCancel", true)}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      >
        {" "}
        <div style={mystyle}>
          {text(
            "Alert Text",
            "Do you really want to delete the file? Press Confirm to Delete"
          )}
          <div>
            <br />
            <Button
              intent={select(
                "Button-Intent",
                ["primary", "success", "warning", "danger", "none"],
                "danger"
              )}
              onClick={handleCancel}
            >
              {text("Confirm Button Text", "Confirm")}
            </Button>
            <div style={{ paddingLeft: "20px", display: "inline" }}>
              <Button intent={"none"} onClick={handleCancel}>
                {text("Cancel Button Text", "Cancel")}
              </Button>
            </div>
          </div>
        </div>
      </Alert>
    </div>
  );
};

////////////////////////////////////////////////////////////////////////////***********************************/
// import React, {useState} from "react";
// import Alert from "./Alert";
// import Button from '../Button/Button'
// import {storiesOf} from '@storybook/react';
// import {
//     withKnobs,
//     text,
//     boolean,
//     number,
//     select,
//   } from "@storybook/addon-knobs";
// import Icon from "../Icon/Icon";

// export default {
//     title: "Alert",
//     component: Alert,

//     decorators: [withKnobs],
// };

// export interface IAlertExampleState {
//     isOpen?: boolean;
//     confirmButtonText?: string;
//     onConfirm?:any;
//     cancelButtonText?: string;
//     onCancel?: any;
//     canClickOutSideToClose?: boolean;
//     canEscapeKeyClose?: boolean;

// }

//  class NormalAlert extends React.Component<IAlertExampleState>{
//     constructor(props:IAlertExampleState){
//         super(props);
//         this.state={
//             canUseEscape: false,
//             canOutsideClickCancel: false,
//             isOpen: false,
//         }
//         this.handleOpen.bind(this);
//         this.handleCancel.bind(this);
//         this.handleConfirm.bind(this);
//     }
//     handleOpen(){
//         // console.log(this);
//         this.setState({isOpen: true});
//     }
//     handleCancel(){
//         this.setState({isOpen: false});
//     }
//     handleConfirm(){
//         this.setState({isOpen: false});
//     }
//     public render(){
//         const{ canClickOutSideToClose=true,canEscapeKeyClose=false,...alertProps}= this.props;
//         console.log(alertProps);
//         // console.log(this.state["isOpen"])
//         return(
//             <div>
//                 <Button text="Open the Alert error" onClick={(e) => this.handleOpen()}/>
//                 <Alert
//                 isOpen={this.state["isOpen"]}
//                 canClickOutSideToClose= {canClickOutSideToClose}
//                 canEscapeKeyClose = {canEscapeKeyClose}
//                 onCancel={this.handleCancel}
//                 onConfirm={this.handleConfirm}
//                   {...alertProps}
//                 >
//                      {this.props.children}

//                 </Alert>
//             </div>
//         )
//     }

//  }

//  storiesOf("Alert", module).add("Basic Alert with Knobs", () => (
//     <NormalAlert

//     canClickOutSideToClose={boolean("canOutsideClickCancel",true)}
//     cancelButtonText={text("cancelButtonText","Cancel Button Text")}
//     confirmButtonText={text("confirmButtonText","Confirm Button Text")}

//     >
//         <div style={{float:"left", display:"inline"}}>        <p>
//             Do you want to really delete the file
//         </p>
//         <Button small={true} intent="danger">Delete</Button>
//         </div>

//     </NormalAlert>
//     ));
