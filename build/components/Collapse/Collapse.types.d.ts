/// <reference types="react" />
import { IProps } from "../../common";
export interface CollapseProps extends IProps {
    /**
     * The html tag in which the collapse wanted to be placed
     * i.e can be places in table as well
     * @default "div"
     */
    component?: React.ElementType;
    /**
     * Prop which defines if the collapse should be open
     * or closed
     * @default false
     */
    isOpen?: boolean;
    /**
     * Prop lets the user decide if the children should be mounted
     * even when the collaspe is closed
     * @default false
     */
    keepChildrenMounted?: boolean;
    /**
     * Time for the collapse transition(ms). Both the animation time in
     * CSS and trasitionDuration must be the same.
     * @default 200
     */
    transitionDuration?: number;
}
export interface CollapseState {
    /** The state the element is currently in. */
    animationState: AnimationStates;
    /**
     * The height of the collapse based on the contents input
     * Is undefined before contents are input
     * Used for CSS as well
     */
    height: string | undefined;
    /**
     * Takes the height of the most recent collapse is none is given from current
     * Is undefined for the before first collapse
     */
    openHeight: number | undefined;
}
/**
 * A list of states through which the collapse has to pass through
 * When opening: OPEN_START -> OPENING -> OPEN
 * When closing: CLOSING_START -> CLOSING -> CLOSED
 */
export declare enum AnimationStates {
    OPEN_START = 0,
    OPENING = 1,
    OPEN = 2,
    CLOSING_START = 3,
    CLOSING = 4,
    CLOSED = 5
}
