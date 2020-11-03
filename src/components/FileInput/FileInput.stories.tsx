// Generated with util/create-component.js
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Remove other stories except knob,Bring callback story as a knob (Remove me after fixing)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import React from "react";
import FileInput from "./FileInput";
import { styleForStories } from "../../common/classes";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";

export default {
  title: "Foundations/FileInput",
  component: FileInput,
  decorators: [withKnobs],
};

export const FileInputWithKnobs = () => (
  <div style={styleForStories}>
    <div>
      <FileInput
        buttonText={text("Button Text", "Browse Files")}
        placeholder={text("Placeholder", "Choose File...")}
        disabled={boolean("Disabled", false)}
        large={boolean("Large", false)}
      />
    </div>
  </div>
);

// export const FileInputWithButtonText = () => (
//     <div >
//       <FileInput buttonText="Browse Files"  />
//     </div>
// );
//
// export const FileInputWithPlaceholder = () => (
//     <div >
//       <FileInput placeholder="Choose File..." buttonText="Browse Files"  />
//     </div>
// );
//
// export const FileInputLarge = () => (
//     <div >
//       <FileInput placeholder="Choose File..." buttonText="Browse Files" large={true} />
//     </div>
// );
//
// export const FileInputDisabled = () => (
//     <div >
//       <FileInput placeholder="Choose File..." buttonText="Browse Files"  disabled={true} />
//     </div>
// );
//
// export const FileInputwithFileHandleCallback = () => {
//     var FileName="", FileType="", FileSize="";
//     function handleFiles(File){
//         console.log(File)
//     }
//     return(
//     <div >
//       <FileInput placeholder="Choose File..." buttonText="Browse Files"  handleFile={handleFiles} />
//       <h1>Check your console for file details</h1>
//
//     </div>)
// };
//
//
