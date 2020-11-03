import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IIconProps } from "./Icon.types";
import "./Icon.scss";
export declare class Icon extends AbstractPureComponent2<IIconProps & React.DOMAttributes<HTMLElement>> {
    static displayName: string;
    static readonly SIZE_STANDARD = 16;
    static readonly SIZE_LARGE = 20;
    render(): JSX.Element | null;
    /** Render `<path>` elements for the given icon name. Returns `null` if name is unknown. */
    private renderSvgPaths;
}
export default Icon;
