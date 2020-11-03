import React from "react";
import { ReviewOrderProps } from "./ReviewOrder.types";
import "./ReviewOrder.scss";
export declare class ReviewOrder extends React.PureComponent<ReviewOrderProps> {
    state: {
        isOpen: boolean;
        offGuideExplain: {
            [x: string]: string;
        }[];
    };
    toggleOverlay: () => void;
    render(): JSX.Element;
}
export default ReviewOrder;
