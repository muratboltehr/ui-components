export const Alignment = {
  CENTER: "center" as "center",
  LEFT: "left" as "left",
  RIGHT: "right" as "right",
};
export type Alignment = typeof Alignment[keyof typeof Alignment];

export const Elevation = {
  ZERO: 0 as 0,
  ONE: 1 as 1,
  TWO: 2 as 2,
  THREE: 3 as 3,
  FOUR: 4 as 4,
};
export type Elevation = typeof Elevation[keyof typeof Elevation];

/**
 * The four basic intents.
 */
export const Intent = {
  NONE: "none" as "none",
  PRIMARY: "primary" as "primary",
  SUCCESS: "success" as "success",
  WARNING: "warning" as "warning",
  DANGER: "danger" as "danger",
};
export type Intent = typeof Intent[keyof typeof Intent];

export const Boundary = {
  START: "start" as "start",
  // tslint:disable-next-line:object-literal-sort-keys
  END: "end" as "end",
};
export type Boundary = typeof Boundary[keyof typeof Boundary];

export const Position = {
  BOTTOM: "bottom" as "bottom",
  BOTTOM_LEFT: "bottom-left" as "bottom-left",
  BOTTOM_RIGHT: "bottom-right" as "bottom-right",
  LEFT: "left" as "left",
  LEFT_BOTTOM: "left-bottom" as "left-bottom",
  LEFT_TOP: "left-top" as "left-top",
  RIGHT: "right" as "right",
  RIGHT_BOTTOM: "right-bottom" as "right-bottom",
  RIGHT_TOP: "right-top" as "right-top",
  TOP: "top" as "top",
  TOP_LEFT: "top-left" as "top-left",
  TOP_RIGHT: "top-right" as "top-right",
};
export type Position = typeof Position[keyof typeof Position];

export const Size = {
  NONE: "none" as "none",
  SMALL: "small" as "small",
  MEDIUM: "medium" as "medium",
  LARGE: "large" as "large",
};

export type Size = typeof Size[keyof typeof Size];

export const Orientation = {
  HORIZONTAL: "horizontal" as "horizontal",
  // tslint:disable-next-line:object-literal-sort-keys
  VERTICAL: "vertical" as "vertical",
};
export type Orientation = typeof Orientation[keyof typeof Orientation];

export const Active = {
  ACTIVE: "active" as "active",
  // tslint:disable-next-line:object-literal-sort-keys
  NOTACTIVE: "notactive" as "notactive",
};
export type Active = typeof Active[keyof typeof Active];

export const Fill = {
  FILL: "fill" as "fill",
  // tslint:disable-next-line:object-literal-sort-keys
  NOFILL: "nofill" as "nofill",
};
export type Fill = typeof Fill[keyof typeof Fill];

export const Interactive = {
  INTERACTIVE: "Interactive" as "Interactive",
};
export type Interactive = typeof Interactive[keyof typeof Interactive];

export const Minimal = {
  MINIMAL: "Minimal" as "Minimal",
};
export type Minimal = typeof Minimal[keyof typeof Minimal];

export const Round = {
  ROUND: "Round" as "Round",
};
export type Round = typeof Round[keyof typeof Round];
