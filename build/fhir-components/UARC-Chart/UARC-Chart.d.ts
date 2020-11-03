import React from "react";
import { PointClickEventObject } from "highcharts";
import { UARCChartProps } from "./UARC-Chart.types";
import "./UARC-Chart.scss";
interface IState {
    activeData: {
        uarc: string;
        dateRecorded: Date;
    };
}
export declare class UARCChart extends React.Component<UARCChartProps> {
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
            min: number;
            max: number;
            tickInterval: number;
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
export default UARCChart;
