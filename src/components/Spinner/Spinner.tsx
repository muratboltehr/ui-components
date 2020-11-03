/**
 * This program makes a spinner using React and TypeScript
 */

import React,{Component} from "react";
import classNames from "classnames";
import "./Spinner.scss";
// import * as Classes from './nameOfClasses';
import { SpinnerProps } from "./Spinner.types";
import { Classes, Intent, Size } from "../../common";

/**
 * This constant defines the radius of the rings being formed
 * and this size is realtive to the size of the display
 */

const R = 45;

/**
 * This is the formula used to get the circle to form and have gotten
 * this from StackOverflow.
 */
const TRACK = `M 50,50 m 0,-${R} a ${R},${R} 0 1 1 0,${
  R * 2
} a ${R},${R} 0 1 1 0,-${R * 2}`;

/**
 * The path length of the circle i.e circumfrence and this is unitless
 */
const PATH_LENGTH = 280;

/**
 * The minimum possible size of the loader
 */
const MIN_SIZE = 10;

/**
 * A stroke width factor
 */
const STROKE_WIDTH = 4;

/**
 * The minimum stroke width possible
 */
const MIN_STROKE_WIDTH = 16;

/**
 * This class contains all the functions to execute the program
 */

export class Spinner extends Component<SpinnerProps> {
  public static readonly SIZE_SMALL = 20;
  public static readonly SIZE_STANDARD = 50;
  public static readonly SIZE_LARGE = 100;

  render() {
    const { className, value, intent, tagName = "div" } = this.props;
    const size = this.getSize();

    const _classNames = classNames(
      Classes.SPINNER,
      Classes.intentClass(intent),
      { [Classes.NO_SPIN]: value != null },
      className
    );

    /**
     * Calculates the strokewidth depending on the size of the spinner
     */
    const strokeWidth = Math.min(
      MIN_STROKE_WIDTH,
      (STROKE_WIDTH * Spinner.SIZE_LARGE) / size
    );

    /**
     * Calculates the length of the spinner head
     * If values is given then it is checked if the
     * given value is valid and of no value given then
     * uses default value to 0.2
     */
    const strokeOffset =
      PATH_LENGTH -
      PATH_LENGTH * (value == null ? 0.2 : this.validValue(value, 0, 1));

    return React.createElement(
      tagName,
      { className: _classNames },
      React.createElement(
        tagName,
        { className: Classes.SPINNER_ANIMATION },

        /**
         * Creating an svg to place the paths on
         */
        <svg
          width={size}
          height={size}
          strokeWidth={strokeWidth.toFixed(2)}
          viewBox={this.getViewBox(strokeWidth)}
        >
          <path className={Classes.SPINNER_TRACK} d={TRACK} />
          <path
            className={
              intent == "none"
                ? Classes.intentClass("primary")
                : Classes.intentClass(intent)
            }
            fill="none"
            d={TRACK}
            pathLength={PATH_LENGTH}
            strokeDasharray={`${PATH_LENGTH} ${PATH_LENGTH}`}
            strokeDashoffset={strokeOffset}
          />
        </svg>
      )
    );
  }

  /**
   * This method gets the size of the spinner based on the props
   * Also checks if the given size is valid and if not then sets
   * it to the MIN_SIZE
   * If size value is null then defaults it to the standard size
   */
  private getSize() {
    const { size } = this.props;

    if (size == null || size === "none") {
      return Spinner.SIZE_STANDARD;
    } else if (size === "small") {
      return Spinner.SIZE_SMALL;
    } else if (size === "large") {
      return Spinner.SIZE_LARGE;
    }
    return Spinner.SIZE_STANDARD;
  }

  /**
   * This method checks if an input is valid based on max and
   * min parameters
   * @param input value input by the user
   * @param min minimum accpeted value
   * @param max maximum accpeted value
   * @return wether input is valid or not ,and is null then returns null
   */
  private validValue(input: number, min: number, max: number) {
    if (input == null) {
      return input;
    }
    if (min > max) {
      throw new Error("Max value cannot be greater than min value");
    }

    return Math.min(Math.max(input, min), max);
  }

  /**
   * Helps get the name of the intent class for the program to run
   * @param intent the user input
   * @return the intent in lowercase
   */
  // private intentClass(intent?: Intent) {
  //   if (intent == null || intent === Intent.NONE) {
  //     return undefined;
  //   }

  //   return intent.toLowerCase();
  // }

  /**
   * Calculates the position and dimensions of the svg based on the the strokeWidth
   * @param strokeWidth the strokeWidth of the spinner
   */
  private getViewBox(strokeWidth: number) {
    const radius = R + strokeWidth / 2;
    const viewBoxX = (50 - radius).toFixed(2);
    const viewBoxXWidth = (radius * 2).toFixed(2);
    return `${viewBoxX} ${viewBoxX} ${viewBoxXWidth} ${viewBoxXWidth}`;
  }
}

export default Spinner;
