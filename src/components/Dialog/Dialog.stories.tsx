// Generated with util/create-component.js
import React, { useState } from "react";
import Dialog from "./Dialog";
import Button from "../Button/Button";
import { storiesOf } from "@storybook/react";
import { Classes } from "../../common";
import { styleForStories } from "../../common/classes";

import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
export default {
  title: "Foundations/Dialog",
  component: Dialog,
  decorators: [withKnobs],
};

export const DialogWithKnobs = () => {
  const [propsData, setPropsData] = useState({
    autoFocus: true,
    EscapeKeyToClose: true,
    canOutsideClickClose: true,
    isOpen: false,
    usePortal: true,
  });

  const handleCloseChange = () => {
    setPropsData((prevState) => {
      return { ...prevState, isOpen: false };
    });
  };

  const handleOpenChange = () => {
    setPropsData((prevState) => {
      return { ...prevState, isOpen: true };
    });
  };
  return (
    <div style={styleForStories}>
      <div>
        <Button onClick={(e) => handleOpenChange()}>
          Click to open Dialog
        </Button>
        <Dialog
          {...propsData}
          canClickOutSideToClose={boolean("canOutsideClickCancel", true)}
          onClose={handleCloseChange}
        >
          <div className={Classes.DIALOG_BODY}>
            <p>
              {text(
                "Dialog Body Text",
                "Data integration is the seminal problem of the digital age. For over ten years, we’ve helped the world’s premier organizations rise to the challenge."
              )}{" "}
            </p>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button intent={'warning'} outlined={true} onClick={handleCloseChange}>
                {text("Cancel Button Text", "Cancel")}
              </Button>
                <Button intent="primary">
                  {text("link button Text", "Visit website")}
                </Button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

// export interface IDialogExampleState {
//     autoFocus: true;
//     EscapeKeyToClose: true;
//     canOutsideClickClose: true;
//     isOpen: false;
//     usePortal: true;
//   }

//   class NormalDialog extends React.Component<IDialogExampleState> {
//     constructor(props: IDialogExampleState) {
//         super(props);
//         this.handleOpenChange.bind(this);
//       }
//       public state: IDialogExampleState = {
//         autoFocus: true,
//         EscapeKeyToClose: true,
//         canOutsideClickClose: true,
//         isOpen: false,
//         usePortal: true,
//       };
//       handleCloseChange= () =>{
//         this.setState({isOpen:false});
//       }
//       handleOpenChange = () => {
//         this.setState({ isOpen: !this.state.isOpen });
//       };
//       public render(){
//         return(
//             <div>
//                 <Button onClick={(e) => this.handleOpenChange()}>
//                     Click to open Dialog
//                 </Button>
//                 <Dialog
//                     isOpen={this.state.isOpen}
//                     usePortal={true}
//                     autofocus={true}
//                     EscapeKeyToClose= {true}
//                     canOutsideClickClose = {true}
//                     onClose={this.handleCloseChange}
//                     >

//                     {this.props.children}
//                 </Dialog>
//             </div>
//         )
//       }
//     }

//     storiesOf("Dialog", module).add("Basic Dialog", () => (
//     <NormalDialog
//     autoFocus= {true}
//     EscapeKeyToClose = {true}
//     canOutsideClickClose= {true}
//     isOpen= {false}
//     usePortal ={ true}
//     >
//         <div className={Classes.DIALOG_BODY}>
//         <strong>Data integration is the seminal problem of the digital age. For over ten years, we’ve helped the world’s premier organizations rise to the challenge. </strong>
//         </div>
//         <div className={Classes.DIALOG_FOOTER}>
//           <div className={Classes.DIALOG_FOOTER_ACTIONS}>

//           <a href="https://www.google.com/"><Button intent="primary">
//             Visit the website
//           </Button>
//           </a>
//         </div>
//         </div>
//         </NormalDialog>
//     ));
