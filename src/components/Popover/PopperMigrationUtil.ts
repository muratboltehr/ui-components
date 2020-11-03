import { Placement } from "popper.js";
import { Position } from "../../common/enums";
import { PopoverPosition } from "./Popover.types";

export function positionToPlacement(position: PopoverPosition): Placement {
  switch (position) {
    case Position.TOP_LEFT:
      return "top-start";
    case Position.TOP:
      return "top";
    case Position.TOP_RIGHT:
      return "top-end";
    case Position.RIGHT_TOP:
      return "right-start";
    case Position.RIGHT:
      return "right";
    case Position.RIGHT_BOTTOM:
      return "right-end";
    case Position.BOTTOM_RIGHT:
      return "bottom-end";
    case Position.BOTTOM:
      return "bottom";
    case Position.BOTTOM_LEFT:
      return "bottom-start";
    case Position.LEFT_BOTTOM:
      return "left-end";
    case Position.LEFT:
      return "left";
    case Position.LEFT_TOP:
      return "left-start";
    case "auto":
    case "auto-end":
    case "auto-start":
      return position;

    default:
      return assertNever(position);
  }

  function assertNever(i: never): never {
    throw new Error("Unexpected Position: " + i);
  }
}
