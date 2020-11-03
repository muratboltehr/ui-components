/// <reference types="react" />
import { OverlayProps as IOverlayProps, OverlayState as IOverlayState } from "./Overlay.types";
import "./Overlay.scss";
import { AbstractPureComponent2 } from "../../common";
export declare class Overlay extends AbstractPureComponent2<IOverlayProps, IOverlayState> {
    static displayName: string;
    static defaultProps: IOverlayProps;
    static getDerivedStateFromProps({ isOpen: hasEverOpened }: IOverlayProps): {
        hasEverOpened: true;
    };
    private static openStack;
    private static getLastOpened;
    containerElement: HTMLElement;
    private refHandlers;
    constructor(props?: IOverlayProps, context?: any);
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IOverlayProps): void;
    componentWillUnmount(): void;
    /**
     * @public for testing
     * @internal
     */
    bringFocusInsideOverlay(): number;
    private maybeRenderChild;
    private maybeRenderBackdrop;
    private overlayWillClose;
    private overlayWillOpen;
    private handleBackdropMouseDown;
    private handleDocumentClick;
    private handleDocumentFocus;
    private handleKeyDown;
}
export default Overlay;
