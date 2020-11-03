import React, { useState } from "react";
import Overlay from "../Overlay/Overlay";
import {Classes, Intent} from "../../common";
import {styleForStories} from '../../common/classes'

import Button from "../Button/Button";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
import classNames from "classnames";

export default {
    title: "Foundations/Overlay",
  decorators: [withKnobs],
  component:Overlay
};

export const OverlayWithKnob = ()=>{
  const [isOpen ,setOpen] = useState(false)
  const classeName= classNames(
    Classes.CARD,
    Classes.elevationClass(4),
    "overlay-example"
  )

  return(
    <div style={styleForStories}>
      <div style={{display:"block"}}>
      <Button intent={Intent.NONE} onClick={()=>{setOpen(!isOpen)}}>
        Show Overlay
      </Button>
      <Overlay isOpen={isOpen} 
      className={Classes.OVERLAY_SCROLL_CONTAINER}
      hasBackdrop={boolean("hasBackDrop",true)}
      canEscapeKeyClose = {boolean("Escape key to Close",true)}
      canOutsideClickClose ={boolean("Click Outside to Close",false)}
      onClose={(e)=>{setOpen(false)}}
      transitionDuration={100}
      >
       <div className={classeName}>
       <h3>I'm an Overlay!</h3>
                        <p>
                            This is a simple container with some inline styles to position it on the screen. Its CSS
                            transitions are customized for this example only to demonstrate how easily custom
                            transitions can be implemented.
                        </p>
                        <p>
                            Click the "Focus button" below to transfer focus to the "Show overlay" trigger button
                            outside of this overlay. If persistent focus is enabled, focus will be constrained to the
                            overlay. Use the key to move to the next focusable element to illustrate
                            this effect.
                        </p>
                        <p>
                            Click the "Make me scroll" button below to make this overlay's content really tall, which
                            will make the overlay's container (but not the page) scrollable
                        </p>
                        <p>
                            Click the "Focus button" below to transfer focus to the "Show overlay" trigger button
                            outside of this overlay. If persistent focus is enabled, focus will be constrained to the
                            overlay. Use the key to move to the next focusable element to illustrate
                            this effect.
                        </p>
                        <p>
                            Click the "Make me scroll" button below to make this overlay's content really tall, which
                            will make the overlay's container (but not the page) scrollable
                        </p>
                        <p>
                            Click the "Focus button" below to transfer focus to the "Show overlay" trigger button
                            outside of this overlay. If persistent focus is enabled, focus will be constrained to the
                            overlay. Use the key to move to the next focusable element to illustrate
                            this effect.
                        </p>
                        <p>
                            Click the "Make me scroll" button below to make this overlay's content really tall, which
                            will make the overlay's container (but not the page) scrollable
                        </p>
                        <br />
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Button intent={Intent.DANGER} onClick={()=>{setOpen(false)}} style={{ margin: "" }}>
                                Close
                            </Button>                    
                        </div>

       </div>
      </Overlay>
      </div>
    </div>
  )
}
