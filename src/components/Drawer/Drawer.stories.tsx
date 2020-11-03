// Generated with util/create-component.js
import React, { useState } from "react";
import Drawer from "./Drawer";
import {Position} from '../../common/position'
import Button from '../Button/Button'
import {styleForStories} from '../../common/classes'
import {
    withKnobs,
    select,
    text
  } from "@storybook/addon-knobs";
import { ALIGN_CENTER } from "../../common/classes";
export default {
    title: "Foundations/Drawer",
    decorators: [withKnobs],
    component:Drawer
};

export const drawerKnobs = () => {

    const [propsData,setPropsData] = useState({
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        hasBackdrop: true,
        isOpen: false,
        position: Position.RIGHT,
        size: undefined,
        usePortal: true,
    })
   
    let sampleText='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum incidunt labore, mollitia, tenetur veniam vero ipsa doloremque sequi facere at, sapiente laboriosam maxime omnis ea quibusdam quidem odio? Distinctio, eveniet.'
    const handleClose = () => {
        setPropsData((prevState)=> {return {...prevState,isOpen:false}})
    }
  
    const handleOpen = () => {
        setPropsData((prevState)=> {return {...prevState,isOpen:true}})
}
    return (
        <div style={ styleForStories}> 
        <div>
        
       <Button 
                  aria-label="Open"
                  intent="primary"
                  onClick={handleOpen}
              > Open Drawer </Button>  
      <Drawer
       {...propsData} 
       title={text('Title','Sample Title')}
       onClose = {handleClose}
        size={select("Size of Drawer", ["50%","90%", "70%", "30%",], "50%")}
        position={select("Position of Drawer", ["top", "bottom", "left" ,"right"], "right")}
        className="knobDrawer"
        children={text('Data inside the Drawer',sampleText)}
      />
          </div> 
       </div>
    );
  };


