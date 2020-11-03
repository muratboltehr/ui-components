/// <reference types="react" />
import { FileInputProps } from "./FileInput.types";
import { AbstractPureComponent2 } from '../../common';
import "./FileInput.scss";
export declare class FileInput extends AbstractPureComponent2<FileInputProps> {
    flag: boolean;
    constructor(props: any);
    static defaultPropValues: FileInputProps;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export default FileInput;
