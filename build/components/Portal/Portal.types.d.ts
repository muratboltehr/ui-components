import { IProps } from "../../common";
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
