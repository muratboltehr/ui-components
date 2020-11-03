/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { DrawerProps } from "./Drawer.types";
import "./Drawer.scss";
/**
 * Drawers overlay content over existing parts of the UI and are anchored to the edge of the screen.
 * <br/>
 * Drawers can be brought from the top,bottom,left of right side of th screen.Size of the drawer can be modified using the size props.
 */
export declare class Drawer extends AbstractPureComponent2<DrawerProps> {
    static displayName: string;
    static defaultProps: DrawerProps;
    static readonly SIZE_SMALL = "360px";
    static readonly SIZE_STANDARD = "50%";
    static readonly SIZE_LARGE = "90%";
    render(): JSX.Element;
    protected validateProps(props: DrawerProps): void;
    private maybeRenderCloseButton;
    private maybeRenderHeader;
}
export default Drawer;
