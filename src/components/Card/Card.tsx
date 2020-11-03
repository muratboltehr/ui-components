/**
 * This program creates a Card component which is a div with a set background
 * color.
 */
import React from "react";
import { CardProps } from "./Card.types";
import "./Card.scss";
import { AbstractPureComponent2, Classes, Elevation } from "../../common";
import classNames from "classnames";

/**
 * In this class the main card is being rendered
 * A div is used and it is styled in Card.scss to get it to look like a card
 * The default props have been set:
 * 1. Elevation shadow is set to zero
 * 2. Card is not interactive
 * Other elements such as buttons or text inputs can be added to the card as well
 */
export class Card extends AbstractPureComponent2<CardProps> {
  defaultProps: CardProps = {
    elevation: Elevation.ZERO,
    interactive: false,
  };

  render() {
    const { className, interactive, elevation, ...htmlProps } = this.props;
    const _classNames = classNames(
      Classes.elevationClass(elevation),
      { [Classes.INTERACTIVE]: interactive },
      Classes.CARD,
      className
    );

    return <div className={_classNames} {...htmlProps} />;
  }
}

export default Card;
