import { IProps, HTMLDivProps, Elevation } from "../../common";

// Generated with util/create-component.js
/**
 *
 */
export interface CardProps extends IProps, HTMLDivProps {
  interactive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  elevation?: Elevation;
}
