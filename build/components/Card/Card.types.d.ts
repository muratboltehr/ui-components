/// <reference types="react" />
import { IProps, HTMLDivProps, Elevation } from "../../common";
/**
 *
 */
export interface CardProps extends IProps, HTMLDivProps {
    interactive?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    elevation?: Elevation;
}
