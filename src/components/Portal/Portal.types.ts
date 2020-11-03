import { IProps } from "../../common";

// Generated with util/create-component.js
export interface PortalProps extends IProps {
  container: HTMLElement;

  childrenMountedCallback?: () => void;
}

export interface PortalState {
  portalMounted: boolean;
}

export interface PortalContext {
  customPortalClassName?: string;
}
