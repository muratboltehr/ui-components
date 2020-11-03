/// <reference types="react" />
import { CardProps } from "./Card.types";
import "./Card.scss";
import { AbstractPureComponent2 } from "../../common";
/**
 * In this class the main card is being rendered
 * A div is used and it is styled in Card.scss to get it to look like a card
 * The default props have been set:
 * 1. Elevation shadow is set to zero
 * 2. Card is not interactive
 * Other elements such as buttons or text inputs can be added to the card as well
 */
export declare class Card extends AbstractPureComponent2<CardProps> {
    defaultProps: CardProps;
    render(): JSX.Element;
}
export default Card;
