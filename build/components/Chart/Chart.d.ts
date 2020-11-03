import React, { Component } from "react";
import { PointClickEventObject } from "highcharts";
import { ChartProps } from "./Chart.types";
import "./Chart.scss";
interface IState {
    activeData: {
        bmi: string | number;
        dateRecorded: Date;
    };
}
export declare class BMIChart extends Component<ChartProps> {
    state: IState;
    updateActiveData: (event: React.ChangeEvent<PointClickEventObject>) => void;
    render(): JSX.Element;
}
export default BMIChart;
