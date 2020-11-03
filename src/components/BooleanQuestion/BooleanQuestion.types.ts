// Generated with util/create-component.js
export interface BooleanQuestionProps {
    /**
  choose the Type of question
  Polar => yes or no question
  text => text type question
  **/
  questionType: "Polar" | "text";
  /** Question to be asked */
  popoverQuestionText: string;
  popoverYesText: string;
  popoverNoText: string;
  definitionMD: string;
  selectedVal: string;
  warningCondition?: string;
  /** callback function ,when user performs action */
  onSelect?: any;
}
