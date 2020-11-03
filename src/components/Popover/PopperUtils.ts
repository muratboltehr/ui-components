import PopperJS from "popper.js";

//commented the below line as it causing compilation error, check if it is needed
// import { PopperBoundary } from "./Popover.types";

export function getPosition(placement: PopperJS.Placement) {
  return placement.split("-")[0] as PopperJS.Position;
}

export function isVerticalPosition(side: PopperJS.Position) {
  return ["left", "right"].indexOf(side) !== -1;
}

export function getOppositePosition(side: PopperJS.Position) {
  if (side === "top") {
    return "bottom";
  }
  if (side === "left") {
    return "right";
  }
  if (side === "bottom") {
    return "top";
  } else {
    return "left";
  }
}

export function getAlignment(placement: PopperJS.Placement) {
  const align = placement.split("-")[1] as "start" | "end" | undefined;
  if (align == "start") {
    return "left";
  }
  if (align == "end") {
    return "right";
  } else {
    return "center";
  }
}

export function getTransformOrigin(data: PopperJS.Data) {
  const position = getPosition(data.placement);
  if (data.arrowElement == null) {
    return isVerticalPosition(position)
      ? `${getOppositePosition(position)} ${getAlignment(position)}`
      : `${getAlignment(position)} ${getOppositePosition(position)}`;
  } else {
    const arrowSizeShift = data.arrowElement.clientHeight / 2;
    const { arrow } = data.offsets;
    return isVerticalPosition(position)
      ? `${getOppositePosition(position)} ${arrow.top + arrowSizeShift}px`
      : `${arrow.left + arrowSizeShift}px ${getOppositePosition(position)}`;
  }
}

const ARROW_SPACING = 4;

export const arrowOffsetModifier: PopperJS.ModifierFn = (data) => {
  if (data.arrowElement == null) {
    return data;
  }

  const arrowSize = data.arrowElement.clientWidth;
  const position = getPosition(data.placement);
  const isVertical = isVerticalPosition(position);
  const len = isVertical ? "width" : "height";
  const offsetSide = isVertical ? "left" : "top";

  const arrowOffsetSize = Math.round(arrowSize / 2 / Math.sqrt(2));
  if (position === "top" || position === "left") {
    data.offsets.popper[offsetSide] -= arrowOffsetSize + ARROW_SPACING;
    data.offsets.arrow[offsetSide] =
      data.offsets.popper[len] - arrowSize + arrowOffsetSize;
  } else {
    data.offsets.popper[offsetSide] += arrowOffsetSize + ARROW_SPACING;
    data.offsets.arrow[offsetSide] = -arrowOffsetSize;
  }
  return data;
};
