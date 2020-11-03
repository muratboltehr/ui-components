import {
  Alignment,
  Elevation,
  Intent,
  Round,
  Orientation,
  Active,
  Fill,
  Size,
  Interactive,
  Minimal,
} from "./enums";
import { Position } from "./position";
import { NodePath } from "@babel/core";
import { CSSProperties } from "react";

export const NS = "optum";

export const NUMERIC_INPUT = `${NS}-numeric-input`;

// modifiers
export const ACTIVE = `${NS}-active`;
export const DISABLED = `${NS}-disabled`;
export const CHECKED = `${NS}-checked`;
export const FIXED = `${NS}-fixed`;
export const FILL = `${NS}-fill`;
export const DARK = `${NS}-dark`;
export const LOADING = `${NS}-loading`;
export const MINIMAL = `${NS}-minimal`;
export const OUTLINED = `${NS}-outlined`;
export const SMALL = `${NS}-small`;
export const LARGE = `${NS}-large`;
export const LARGE_RADIO = `${NS}-large-radio`;
export const MEDIUM = `${NS}-medium`;
export const ALIGN_LEFT = `${NS}-align-left`;
export const ALIGN_RIGHT = `${NS}-align-right`;
export const ALIGN_CENTER = `${NS}-align-center`;
export const INTERACTIVE = `${NS}-interactive`;
export const INLINE = `${NS}-inline`;
export const TEXT_MUTED = `${NS}-text-muted`;
// Button
export const BUTTON = `${NS}-button`;
export const BUTTON_GROUP = `${BUTTON}-group`;
export const BUTTON_TEXT = `${BUTTON}-text`;
export const BUTTON_SPINNER = `${BUTTON}-spinner`;

//Spinner
export const SPINNER = `${NS}-spinner`;
export const SPINNER_TRACK = `${SPINNER}-track`;
export const SPINNER_ANIMATION = `${SPINNER}-animation`;
export const NO_SPIN = `${SPINNER}-nospin`;

//Divider
export const VERTICAL = `${NS}-vertical`;
export const HORIZONTAL = `${NS}-horizontal`;

export const NAVBAR = `${NS}-navbar`;
export const NAVBAR_DIVIDER = `${NAVBAR}-divider`;
export const NAVBAR_GROUP = `${NAVBAR}-group`;
export const NAVBAR_HEADER = `${NAVBAR}-header`;
export const FIXED_TO_TOP = `${NAVBAR}-fixed-to-top`;

//Card
export const CARD = `${NS}-card`;

//COLLAPSE
export const COLLAPSE = `${NS}-collapse`;
export const COLLAPSE_BODY = `${NS}-collapse-body`;

//Menu
export const MENU = `${NS}-menu`;
export const MENU_ITEM = `${MENU}-item`;
export const MENU_ITEM_LABEL = `${MENU_ITEM}-label`;
export const MENU_SUBMENU = `${NS}-submenu`;
export const MENU_DIVIDER = `${MENU}-divider`;
export const MENU_HEADER = `${MENU}-header`;
//Tag
// export const ACTIVE = `${NS}-active`;
export const NOTACTIVE = `${NS}-notactive`;
// export const INTERACTIVE = `${NS}-interactive`;
export const ROUND = `${NS}-isRound`;
export const NOFILL = `${NS}-nofill`;

// Radio Button
export const LABEL = `${NS}-label`;
export const CONTROL = `${NS}-control`;
export const CONTROL_INDICATOR = `${CONTROL}-indicator`;
export const CONTROL_INDICATOR_CHILD = `${CONTROL_INDICATOR}-child`;

export const RADIO_GROUP = `${NS}-radio-button-group`;
export const RADIO_GROUP_INLINE = `${NS}-radio-button-group-inline`;
export const RADIO = `${NS}-radio`;
//Intent

export const INTENT_PRIMARY = intentClass(Intent.PRIMARY);
export const INTENT_SUCCESS = intentClass(Intent.SUCCESS);
export const INTENT_WARNING = intentClass(Intent.WARNING);
export const INTENT_DANGER = intentClass(Intent.DANGER);
//Checkbox

export const CHECKBOX = `${NS}-checkbox`;

///FORMGROUP
export const FORM_GROUP = `${NS}-form-group`;
export const FORM_CONTENT = `${NS}-form-content`;
export const FORM_HELPER_TEXT = `${NS}-form-helper-text`;

//CALLOUT

export const CALLOUT = `${NS}-callout`;
export const CALLOUT_ICON = `${CALLOUT}-icon`;
//Portal
export const PORTAL = `${NS}-portal`;

//Overlay
export const OVERLAY = `${NS}-overlay`;
export const OVERLAY_OPEN = `${OVERLAY}-open`;
export const OVERLAY_CONTAINER = `${OVERLAY}-container`;
export const OVERLAY_CONTENT = `${OVERLAY}-content`;
export const OVERLAY_BACKDROP = `${OVERLAY}-backdrop`;
export const OVERLAY_INLINE = `${OVERLAY}-inline`;
//Text
export const TEXT_ELLIPSIS = `${NS}-text-overflow-ellipsis`;
export const HEADING = `${NS}-heading`;

//Progress Bar
export const PROGRESSBAR = `${NS}-progressbar`;
export const PROGRESS_METER = `${NS}-progress-bar-activated`;
export const PROGRESS_STRIPES_DEACTIVATED = `${NS}-progress-stripes-deactivated`;
export const PROGRESS_ANIMATION_DEACTIVATED = `${NS}-progress-animation-deactivated`;
//FileInput
export const FILE_INPUT = `${NS}-fileinput`;
export const FILE_UPLOAD_INPUT = `${NS}-file-upload-input`;
export const FILE_UPLOAD_INPUT_CUSTOM_TEXT = `${NS}-file-upload-input-custom-text`;

//PANEL
export const PANEL_STACK = `${NS}-panel-stack`;
export const PANEL_STACK_HEADER = `${PANEL_STACK}-header`;
export const PANEL_STACK_HEADER_BACK = `${PANEL_STACK}-header-back`;
export const PANEL_STACK_VIEW = `${PANEL_STACK}-view`;
//Editable Text
export const EDITABLE_TEXT = `${NS}-editable-text`;
export const SINGLELINE = `${NS}-singleline`;
export const SELECTALLONFOCUS = `${NS}-selectallonfocus`;

//Dialog
export const DIALOG = `${NS}-dialog`;
export const DIALOG_CONTAINER = `${DIALOG}-container`;
export const DIALOG_BODY = `${DIALOG}-body`;
export const DIALOG_CLOSE_BUTTON = `${DIALOG}-close-button`;
export const DIALOG_FOOTER = `${DIALOG}-footer`;
export const DIALOG_FOOTER_ACTIONS = `${DIALOG}-footer-actions`;
export const DIALOG_HEADER = `${DIALOG}-header`;

export function getClassNameCase() {
  return NS;
}

//Drawer
export const DRAWER = `${NS}-drawer`;
export const DRAWER_BODY = `${DRAWER}-body`;
export const DRAWER_FOOTER = `${DRAWER}-footer`;
export const DRAWER_HEADER = `${DRAWER}-header`;
export const OVERLAY_SCROLL_CONTAINER = `${OVERLAY}-scroll-container`;

//ALERT
export const ALERT = `${NS}-alert`;
export const ALERT_BODY = `${ALERT}-body`;
export const ALERT_CONTENTS = `${ALERT}-contents`;
export const ALERT_FOOTER = `${ALERT}-footer`;

// //DIALOG
// export const DIALOG = `${NS}-dialog`;
// export const DIALOG_CONTAINER = `${NS}-dialogcontainer`;
// export const DIALOG_HEADER = `${NS}-dialogheader`;
// export const DIALOG_BODY = `${NS}-dialogbody`;
// export const DIALOG_CLOSE_BUTTON = `${NS}-dialog-closebutton`;
// export const DIALOG_FOOTER = `${NS}-dialog-footer`;
// export const DIALOG_FOOTER_ACTIONS= `${NS}-dialog-footer-actions`;

//Popover
export const POPOVER = `${NS}-popover`;
export const POPOVER_ARROW = `${POPOVER}-arrow`;
export const POPOVER_BACKDROP = `${POPOVER}-backdrop`;
export const POPOVER_CONTENT = `${POPOVER}-content`;
export const POPOVER_CONTENT_SIZING = `${POPOVER_CONTENT}-sizing`;
export const POPOVER_DISMISS = `${POPOVER}-dismiss`;
export const POPOVER_DISMISS_OVERRIDE = `${POPOVER_DISMISS}-override`;
export const POPOVER_OPEN = `${POPOVER}-open`;
export const POPOVER_TARGET = `${POPOVER}-target`;
export const POPOVER_WRAPPER = `${POPOVER}-wrapper`;
export const TRANSITION_CONTAINER = `${NS}-transition-container`;

//Tooltip
export const TOOLTIP = `${NS}-tooltip`;
export const TOOLTIP_INDICATOR = `${TOOLTIP}-indicator`;

//Switch
export const SWITCH = `${NS}-switch`;
export const SWITCH_INNER_TEXT = `${NS}-switch-inner-text`;

//Question

export const QUESTION = `${NS}-question`;
export const QUESTION_DESC = `${NS}-question-description`;
export const QUESTION_MAIN = `${NS}-question-main`;
export const QUESTION_PLACEHOLDER = `${NS}-question-placeholder`;
export const QUESTION_OPTIONS = `${NS}-question-options`;
export const QUESTION_CROSS = `${NS}-question-cross`;
//Skeleton
export const SKELETON = `${NS}-skeleton`;

//Report
export const REPORT = `${NS}-report`;
export const REPORT_NAME = `${NS}-report-name`;
export const REPORT_DESCRIPTION = `${NS}-report-description`;
export const REPORT_INFO = `${NS}-report-info`;
export const REPORT_ROW = `${NS}-report-row`;
export const REPORT_HEADER = `${NS}-report-header`;
export const REPORT_HEADER_TITLE = `${NS}-report-title`;
/** Return CSS class for alignment. */
export function alignmentClass(alignment: Alignment) {
  switch (alignment) {
    case Alignment.LEFT:
      return ALIGN_LEFT;
    case Alignment.RIGHT:
      return ALIGN_RIGHT;
    default:
      return ALIGN_CENTER;
  }
}
/** Returns CSS class for elevation name. */
export function elevationClass(elevation: Elevation) {
  if (elevation == null) {
    return undefined;
  }
  return `${NS}-elevation-${elevation}`;
}

/** Returns CSS class for icon name. */
export function iconClass(iconName?: string) {
  if (iconName == null) {
    return undefined;
  }
  return iconName.indexOf(`${NS}-icon-`) === 0
    ? iconName
    : `${NS}-icon-${iconName}`;
}

/** Return CSS class for intent. */
export function intentClass(intent?: Intent) {
  // debugger;
  if (intent == null || intent === Intent.NONE) {
    return undefined;
  }
  return `${NS}-intent-${intent.toLowerCase()}`;
}

export function intentTagClass(intent?: Intent) {
  debugger;
  if (intent == null || intent === Intent.NONE) {
    return undefined;
  }
  return `${NS}-tag-intent-${intent.toLowerCase()}`;
}

export function buttonSize(size?: Size) {
  if (size == null || size === Size.NONE) {
    return undefined;
  }
  return `${NS}-${size.toLocaleLowerCase()}`;
}
/** Return CSS class for postion. */
export function positionClass(position: Position) {
  if (position == null) {
    return undefined;
  }
  return `${NS}-position-${position}`;
}
/** Returns CSS class for orientation name. */
export function orientationClass(orientation: Orientation) {
  if (orientation == "vertical") {
    return VERTICAL;
  } else {
    return HORIZONTAL;
  }
}

export function activeClass(active: Active) {
  if (active == "notactive") {
    return NOTACTIVE;
  } else {
    return ACTIVE;
  }
}

export function fillClass(fill: Fill) {
  if (fill == "fill") {
    return FILL;
  } else {
    return NOFILL;
  }
}
export function sizeClass(size: Size) {
  if (size === "large") {
    return LARGE;
  }
}

export function interactiveClass(interactive: Interactive) {
  if (interactive === "Interactive") {
    return INTERACTIVE;
  }
}

export function minimalClass(minimal: Minimal) {
  if (minimal === "Minimal") {
    return MINIMAL;
  }
}

export function roundClass(round: Round) {
  if (round === "Round") {
    return ROUND;
  }
}

export const styleForStories: CSSProperties = {
  padding: "10%",
  fontFamily: "Arial",
  display: "flex",
  justifyContent: "center",
  minHeight:'200px',
  height: "auto",
  margin: "10%",
  border: "3px solid #318fb5",
};
