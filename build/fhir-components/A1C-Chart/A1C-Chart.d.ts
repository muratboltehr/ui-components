import React, { Component } from "react";
import { PointClickEventObject } from "highcharts";
import { A1CChartProps } from "./A1C-Chart.types";
import "./A1C-Chart.scss";
interface IState {
    activeData: {
        a1c: string;
        dateRecorded: Date;
    };
}
export declare class A1CChart extends Component<A1CChartProps> {
    state: IState;
    updateActiveData: (event: React.ChangeEvent<PointClickEventObject>) => void;
    MILLISECONDS_IN_DAY: number;
    MILLISECONDS_IN_MONTH: number;
    MILLISECONDS_IN_TWO_MONTHS: number;
    convertChartData: (contentData: any) => any;
    options: {
        chart: {
            type: string;
            width: number;
            height: number;
            style: {
                fontSize: string;
            };
        };
        exporting: {
            enabled: boolean;
        };
        title: {
            text: any;
        };
        subtitle: {
            text: string;
            align: string;
        };
        credits: {
            enabled: boolean;
        };
        legend: {
            enabled: boolean;
        };
        xAxis: {
            type: string;
            tickInterval: number;
            lineColor: string;
            lineWidth: number;
            max: number;
            dateTimeLabelFormats: {
                day: string;
                week: string;
                month: string;
            };
            labels: {
                style: {
                    fontFamily: string;
                    fontSize: string;
                };
            };
            plotLines: {
                value: number;
                className: string;
                width: number;
            }[];
        };
        yAxis: {
            gridLineColor: string;
            title: {
                text: string;
                style: {
                    fontFamily: string;
                    fontSize: string;
                };
            };
            labels: {
                style: {
                    fontFamily: string;
                    fontSize: string;
                };
            };
            min: number;
            max: number;
            plotBands: {
                from: number;
                to: number;
                className: string;
            }[];
        }[];
        plotOptions: {
            marker: {
                enabled: boolean;
            };
            series: {
                color: string;
                point: {
                    events: {
                        mouseOver: (event: React.ChangeEvent<PointClickEventObject>) => void;
                    };
                };
            };
            line: {
                dataLabels: {
                    enabled: boolean;
                    style: {
                        fontSize: string;
                    };
                };
                enableMouseTracking: boolean;
            };
        };
        series: {
            name: string;
            data: any;
        }[];
    };
    render(): JSX.Element;
}
export default A1CChart;
