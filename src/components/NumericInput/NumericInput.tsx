// Generated with util/create-component.js
import React from "react";
import classNames from "classnames";
import {  Classes,Utils,HTMLInputProps ,removeNonHTMLProps,AbstractPureComponent2 } from "../../common";
import {safeInvoke} from '../../common/utils/functionUtils'
import { NumericInputProps,INumericInputState,IncrementDirection,NON_HTML_PROPS,ButtonEventHandlers } from "./NumericInput.types";
import { Position,Keys } from "../../common";
import {ButtonGroup} from '../ButtonGroup/ButtonGroup'
import {Button} from '../Button/Button';
import {
  clampValue,
  getValueOrEmptyValue,
  isValidNumericKeyboardEvent,
  isValueNumeric,
  sanitizeNumericInput,
  toMaxPrecision,
} from "./NumeriInputUtils";

import "./NumericInput.scss";


/**
 * The NumericInput component provides controls for easily inputting, incrementing, and decrementing numeric values.
 * Values in numeric inputs can be incremented or decremented using both keyboard and mouse interactions.
 * <br/> <br/>
 * <h2>Keyboard interactions</h2>
 * <ul>
 * <li>↑/↓ - change the value by one step (default: ±1) </li>
 * <li>Shift + ↑/↓ - change the value by one major step (default: ±10)</li>
 * <li>Alt + ↑/↓ - change the value by one minor step (default: ±0.1)</li>
 * </ul>
 * <h2>Mouse interactions</h2>
 * <ul>
 * <li>Click ⌃/⌄ - change the value by one step (default: ±1)</li>
 * <li>Shift + Click ⌃/⌄ - change the value by one major step (default: ±10)</li>
 * <li>Alt + Click ⌃/⌄ - change the value by one minor step (default: ±0.1)</li>
 * </ul>
 */
export class NumericInput extends AbstractPureComponent2<HTMLInputProps & NumericInputProps,INumericInputState> {
  public static VALUE_EMPTY = ""; 
  public static VALUE_ZERO = "0";
  private inputElement: HTMLInputElement | null = null;
  public static defaultProps: NumericInputProps = {
    allowNumericCharactersOnly: true,
    buttonPosition: Position.RIGHT,
    clampValueOnBlur: false,
    defaultValue: NumericInput.VALUE_EMPTY,
    large: false,
    majorStepSize: 10,
    minorStepSize: 0.1,
    selectAllOnFocus: false,
    selectAllOnIncrement: false,
    stepSize: 1,
};
public static getDerivedStateFromProps(props: NumericInputProps, state: INumericInputState) {
  const nextState = {
      prevMaxProp: props.max,
      prevMinProp: props.min,
      prevValueProp: props.value,
  };

  const didMinChange = props.min !== state.prevMinProp;
  const didMaxChange = props.max !== state.prevMaxProp;
  const didBoundsChange = didMinChange || didMaxChange;


 

  // in controlled mode, use props.value
  // in uncontrolled mode, if state.value has not been assigned yet (upon initial mount), use props.defaultValue
  const value = props.value?.toString() ?? state.value;
  const stepMaxPrecision = NumericInput.getStepMaxPrecision(props);

  const sanitizedValue =
      value !== NumericInput.VALUE_EMPTY
          ? NumericInput.roundAndClampValue(value, stepMaxPrecision, props.min, props.max)
          : NumericInput.VALUE_EMPTY;

  // if a new min and max were provided that cause the existing value to fall
  // outside of the new bounds, then clamp the value to the new valid range.
  if (didBoundsChange && sanitizedValue !== state.value) {
      return { ...nextState, stepMaxPrecision, value: sanitizedValue };
  }

  return { ...nextState, stepMaxPrecision, value };
}

private static CONTINUOUS_CHANGE_DELAY = 300;
private static CONTINUOUS_CHANGE_INTERVAL = 100;

private static getStepMaxPrecision(props: HTMLInputProps & NumericInputProps) {
  if (props.minorStepSize != null) {
      return Utils.countDecimalPlaces(props.minorStepSize);
  } else {
      return Utils.countDecimalPlaces(props.stepSize);
  }
}

private static roundAndClampValue(value: string, stepMaxPrecision: number, min: number, max: number, delta = 0) {
  if (!isValueNumeric(value)) {
      return NumericInput.VALUE_EMPTY;
  }
  const nextValue = toMaxPrecision(parseFloat(value) + delta, stepMaxPrecision);
  return clampValue(nextValue, min, max).toString();
}
public state: INumericInputState = {
  currentImeInputInvalid: false,
  shouldSelectAfterUpdate: false,
  stepMaxPrecision: NumericInput.getStepMaxPrecision(this.props),
  value: getValueOrEmptyValue(this.props.value ?? this.props.defaultValue),
};
private incrementButtonHandlers = this.getButtonEventHandlers(IncrementDirection.UP);
    private decrementButtonHandlers = this.getButtonEventHandlers(IncrementDirection.DOWN);
    private intervalId: number | null = null;
    private delta = 0;
    private didPasteEventJustOccur = false;
 public render() {
  const { buttonPosition, className, fill, large ,small} = this.props;
  const containerClasses = classNames(Classes.NUMERIC_INPUT, { [Classes.LARGE]: large ,[Classes.FILL]: fill , [Classes.SMALL]: small},  className);
  const buttons = this.renderButtons();
  console.log(containerClasses);
    return (
      <div className={containerClasses} >
         {buttonPosition === Position.LEFT && buttons}
         {this.renderInput()}
        {buttonPosition === Position.RIGHT && buttons}
      </div>
    );
  }



  private renderInput() {
    const inputGroupHtmlProps = removeNonHTMLProps(this.props, NON_HTML_PROPS, true);
    return (
        <input
            autoComplete="off"
            className='NumericInput'
            {...inputGroupHtmlProps}
            onChange={this.handleInputChange}
            value={this.state.value}
            onKeyDown={this.handleInputKeyDown}
        />
    );
}

  private renderButtons() {
    const { intent, max, min } = this.props;    
    const { value } = this.state;
    const disabled = this.props.disabled || this.props.readOnly;
    return (
        <ButtonGroup className={Classes.FIXED} key="button-group" >
            <Button className='numericInputButton'
                disabled={disabled || (value !== "" && +value >= max)}
                intent={intent}
                outlined
                {...this.incrementButtonHandlers}   
            > 🔼 </Button>
            <Button
                disabled={disabled || (value !== "" && +value <= min)}
                outlined
                intent={intent}
                {...this.decrementButtonHandlers}
            >🔽 </Button>
        </ButtonGroup>
    );
}


private handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (this.props.disabled || this.props.readOnly) {
        return;
    }

    const { keyCode } = e;

    let direction: IncrementDirection;

    if (keyCode === Keys.ARROW_UP) {
        direction = IncrementDirection.UP;
    } else if (keyCode === Keys.ARROW_DOWN) {
        direction = IncrementDirection.DOWN;
    }

    if (direction != null) {
        // when the input field has focus, some key combinations will modify
        // the field's selection range. we'll actually want to select all
        // text in the field after we modify the value on the following
        // lines. preventing the default selection behavior lets us do that
        // without interference.
        e.preventDefault();

        const delta = this.updateDelta(direction, e);
        this.incrementValue(delta);
    }

    safeInvoke(this.props.onKeyDown, e);
};

private getButtonEventHandlers(direction: IncrementDirection): ButtonEventHandlers {
  return {
      // keydown is fired repeatedly when held so it's implicitly continuous
      onKeyDown: evt => {
          if (!this.props.disabled && Keys.isKeyboardClick(evt.keyCode)) {
              this.handleButtonClick(evt, direction);
          }
      },
      onMouseDown: evt => {
          if (!this.props.disabled) {
              this.handleButtonClick(evt, direction);
              this.startContinuousChange();
          }
      },
  };
}

private handleButtonClick = (e: React.MouseEvent | React.KeyboardEvent, direction: IncrementDirection) => {
  const delta = this.updateDelta(direction, e);
  const nextValue = this.incrementValue(delta);
  this.props.onButtonClick?.(+nextValue, nextValue);
};

private startContinuousChange() {
  // The button's onMouseUp event handler doesn't fire if the user
  // releases outside of the button, so we need to watch all the way
  // from the top.
  document.addEventListener("mouseup", this.stopContinuousChange);

  // Initial delay is slightly longer to prevent the user from
  // accidentally triggering the continuous increment/decrement.
  this.setTimeout(() => {
      this.intervalId = window.setInterval(this.handleContinuousChange, NumericInput.CONTINUOUS_CHANGE_INTERVAL);
  }, NumericInput.CONTINUOUS_CHANGE_DELAY);
}
private stopContinuousChange = () => {
  this.delta = 0;
  this.clearTimeouts();
  clearInterval(this.intervalId);
  document.removeEventListener("mouseup", this.stopContinuousChange);
};

private handleContinuousChange = () => {
  const nextValue = this.incrementValue(this.delta);
  this.props.onButtonClick?.(+nextValue, nextValue);
};

// Callbacks - Input
    // =================

    private handleInputFocus = (e: React.FocusEvent) => {
      // update this state flag to trigger update for input selection (see componentDidUpdate)
      this.setState({ shouldSelectAfterUpdate: this.props.selectAllOnFocus });
      safeInvoke(this.props.onFocus, e);
  };



  private handleInputChange = (e: React.FormEvent) => {
      const { value } = e.target as HTMLInputElement;

      let nextValue = value;
      if (this.props.allowNumericCharactersOnly && this.didPasteEventJustOccur) {
          this.didPasteEventJustOccur = false;
          nextValue = sanitizeNumericInput(value);
      }

      this.handleNextValue(nextValue);
      this.setState({ shouldSelectAfterUpdate: false });
  };


  private handleNextValue(valueAsString: string) {
    if (this.props.value == null) {
        this.setState({ value: valueAsString });
    }

    this.props.onValueChange?.(+valueAsString, valueAsString, this.inputElement);
}

private incrementValue(delta: number) {
    // pretend we're incrementing from 0 if currValue is empty
    const currValue = this.state.value === NumericInput.VALUE_EMPTY ? NumericInput.VALUE_ZERO : this.state.value;
    const nextValue = this.roundAndClampValue(currValue, delta);

    if (nextValue !== this.state.value) {
        this.handleNextValue(nextValue);
        this.setState({ shouldSelectAfterUpdate: this.props.selectAllOnIncrement });
    }

    // return value used in continuous change updates
    return nextValue;
}

private getIncrementDelta(direction: IncrementDirection, isShiftKeyPressed: boolean, isAltKeyPressed: boolean) {
    const { majorStepSize, minorStepSize, stepSize } = this.props;

    if (isShiftKeyPressed && majorStepSize != null) {
        return direction * majorStepSize;
    } else if (isAltKeyPressed && minorStepSize != null) {
        return direction * minorStepSize;
    } else {
        return direction * stepSize;
    }
}

private roundAndClampValue(value: string, delta = 0) {
    return NumericInput.roundAndClampValue(
        value,
        this.state.stepMaxPrecision,
        this.props.min,
        this.props.max,
        delta,
    );
}


private updateDelta(direction: IncrementDirection, e: React.MouseEvent | React.KeyboardEvent) {
  this.delta = this.getIncrementDelta(direction, e.shiftKey, e.altKey);
  return this.delta;
}
}

export default NumericInput;

