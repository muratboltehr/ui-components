import React, { FC, useState } from "react";
import { BooleanQuestionProps } from "./BooleanQuestion.types";
import classNames from "classnames";
import marked from "marked";
import "./BooleanQuestion.scss";

const BooleanQuestion: FC<BooleanQuestionProps> = ({
  questionType,
  popoverQuestionText,
  popoverYesText,
  popoverNoText,
  definitionMD,
  selectedVal,
  warningCondition,
  onSelect,
}) => {
  const [showDef, setShowDef] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const yesClass = classNames({
    selectable: true,
    active: "Yes" === selectedVal,
  });

  const noClass = classNames({
    selectable: true,
    active: "No" === selectedVal,
  });

  const labelValue = classNames({
    link: true,
    "p-01": true,
    "error-notification": warningCondition === selectedVal,
    "text-black": warningCondition === selectedVal,
  });
  const getDefinitionMD = () => {
    let rawMakeUp = marked(definitionMD, { sanitize: true });
    return { __html: rawMakeUp };
  };

  const sendValue = (val: any) => {
    // debugger;
    onSelect(val);
    // setAnchorEl(null);
    // setPopoverOpen(!IsPopoverOpen);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  const handleSave = (): void => {
    //check this is a valid number string
    if (isNaN(parseInt(value))) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(
      parseFloat(value) <= 0 || value.length === 0 || value === null
    );
    console.log(parseFloat(value));
    if (!isInvalid) {
      sendValue(value);
    }
  };

  return (
    <div className="question-container">
      <p className="question">{popoverQuestionText}</p>
      {questionType === "Polar" ? (
        <React.Fragment>
          <div className={yesClass} onClick={() => sendValue("Yes")}>
            <div className=" value">Yes</div>
            <div className=" inferred">{popoverYesText}</div>
          </div>
          <div className={noClass} onClick={() => sendValue("No")}>
            <div className=" value">No</div>
            <div className="inferred">{popoverNoText}</div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="text-question-container">
            <div>
              <input
                id="a1c_patient_target"
                className={`clr-input ${isInvalid && "invalid"}`}
                type="number"
                size={4}
                value={value}
                onChange={handleChange}
                autoComplete={"false"}
              />
              <span className="units">%</span>
              {isInvalid && (
                <div className="invalid-feedback">
                  Enter a value greater than zero
                </div>
              )}
            </div>
            <div>
              <button className="btn btn-primary save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
      <div className="text-right definition">
        <i className="fa fa-info-circle"></i>{" "}
        <span onClick={() => setShowDef(!showDef)}>definition </span>
      </div>
      {showDef && (
        <div className="full-definition">
          <div dangerouslySetInnerHTML={getDefinitionMD()}></div>
        </div>
      )}
    </div>
  );
};
export default BooleanQuestion;
