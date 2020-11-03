/// <reference types="react" />
import { QuestionProps } from "./Question.types";
import "./Question.scss";
import { AbstractPureComponent2 } from "../../common";
export declare class Question extends AbstractPureComponent2<QuestionProps> {
    constructor(props: any);
    activeSelection(st?: any): void;
    renderTypeContent(): any;
    getValue(): void;
    render(): JSX.Element;
}
export default Question;
