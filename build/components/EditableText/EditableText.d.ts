import React from "react";
import { EditableTextProps } from "./EditableText.types";
import "./EditableText.scss";
import { AbstractPureComponent2 } from "../../common";
export declare class EditableText extends AbstractPureComponent2<EditableTextProps> {
    private textReference;
    private flag;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private updateContent;
    getLineHeight(element: HTMLElement): number;
    private updateInputDimensions;
    insertAtCaret(el: HTMLTextAreaElement, text: string): void;
    private handleKey;
    handleChange(): void;
    getFontSize(element: HTMLElement): number;
    render(): React.DOMElement<{
        className: string;
        ref: (ref: HTMLElement | null) => HTMLElement;
        title: any;
        contentEditable: boolean;
        placeholder: string;
        onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
        onKeyPress: () => void;
        style: {
            height: any;
            maxLines: number;
            maxHeight: number;
        };
    }, HTMLElement>;
}
export default EditableText;
