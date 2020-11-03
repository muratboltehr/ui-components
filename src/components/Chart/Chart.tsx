// Generated with util/create-component.js
import React, { Component } from "react";
import _ from "lodash";
import Highcharts, { PointClickEventObject } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartProps } from "./Chart.types";

// require("highcharts/modules/exporting.js")(Highcharts);
// require("highcharts/modules/export-data.js")(Highcharts);

import "./Chart.scss";
import moment from "moment";

interface IState {
  activeData: {
    bmi: string | number;
    dateRecorded: Date;
  };
}

export class BMIChart extends Component<ChartProps> {
  state: IState = {
    activeData: this.props.tableData[0]
      ? { ...this.props.tableData[0], weight: 0 }
      : "",
  };
  updateActiveData = (event: React.ChangeEvent<PointClickEventObject>) => {
    const data = {
      bmi: event.target.y,
      dateRecorded: event.target.x,
      weight: 0,
    };
    this.setState({ activeData: data });
  };

  render() {
    const { yAxisTitle, tableData } = this.props;

    const convertChartData = (contentData) => {
      let chartData: any[][];
      return contentData.map((item) => {
        return Array(item.dateRecorded, item.bmi);
      });
    };

    const options = {
      chart: {
        type: "line",
        width: 625,
        height: 450,
      },
      title: {
        text: null,
      },
      subtitle: {
        text: "Today",
        align: "right",
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
      },
      legend:{
            enabled:false
      },

      // tooltip: {
      //   useHTML: true,
      //   shared: true,
      //   // formatter: function() {
      //   //   return formatChartTooltip(this, 'kg/m²', 'bmi');
      //   // },
      //   style: {
      //     fontSize: ".7em",
      //     display: "none",
      //   },
      //   positioner: function() {
      //     return { x: 800, y: 600 };
      //   },
      // },
      xAxis: {
        type: "datetime",
        lineColor: "#00000080",
        lineWidth: 1,
        max: moment().endOf("day").add(1, "day").valueOf(),
        dateTimeLabelFormats: {
          day: "%e-%b",
          week: "%e-%b",
          month: "%b-%y",
        },
        labels: {
          style: {
            fontFamily: "inherit",
            fontSize: ".875rem",
          },
        },
        plotLines: [
          {
            value: moment().endOf("day").valueOf(),
            className: "chart-today-line",
          },
        ],
      },

      yAxis: [
        {
          gridLineColor: "#D0D0CE",
          title: {
            text: yAxisTitle,
            style:{
              fontFamily: "inherit",
              fontSize: "1rem",}

          },
          labels: {
            style: {
            fontFamily: "inherit",
            fontSize: ".875rem",
            },
          },
          min: 0,
          max: 50,
          plotBands: [
            {
              from: 0,
              to: 18.5,
              className: "underweight",
            },
            {
              from: 18.5,
              to: 25,
              className: "ideal",
            },
            {
              from: 25,
              to: 29.9,
              className: "overweight",
            },
            {
              from: 29.9,
              to: 35,
              className: "highrange",
            },
            {
              from: 35,
              to: 39.9,
              className: "highrange1",
            },
            {
              from: 40,
              to: 100,
              className: "highrange2",
            },
          ],
        },
      ],

      plotOptions: {
        series: {
          color: "#2F1986",
          point: {
            events: {
              mouseOver: this.updateActiveData,
            },
          },
        },
        line: {
          dataLabels: {
            enabled: true,
            style: {
              fontSize: "1em",
            },
          },
          enableMouseTracking: true,
        },
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          type: "line",
          data: convertChartData(tableData),
          name: yAxisTitle,
        },
      ],
    };
    // const chartOptions = {
    //   title: {
    //     text: ''
    //   },
    //   series: [{
    //     data: [1,2,3],

    //   }]
    // }
    return (
      <div className="chart-container">
        <section className="chart-wrap">
          <HighchartsReact highcharts={Highcharts} options={options} />
          <div className="bmi-legend-container">
            <ul>
              <li className="legend-highrange2">Obese III: &gt; 40</li>
              <li className="legend-highrange1">Obese II: 35 to 39.9</li>
              <li className="legend-highrange">Obese I: 30 to 34.9</li>
              <li className="legend-overweight">Overweight: 25 to 29.9</li>
              <li className="legend-ideal">Ideal: 18.5 to 24.9</li>
              <li className="legend-underweight">Underweight: &lt; 18.5</li>
            </ul>
          </div>
        </section>
        <section className='chart-table-warp'>
          <ChartDataTable data={tableData} activeRow={this.state.activeData}/>
          <ActiveMedicationCallout dateRecorded={this.state.activeData.dateRecorded} medicationList={[]}></ActiveMedicationCallout>
        </section>

      </div>
    );
  }
}

const ChartDataTable=({data,activeRow})=>{

  return(
    <div className="bmichart-table-contents">
          <table className="table table-sm table-striped bmichart-table">
            <colgroup>
              <col className="thirtypercentwidth" />
              <col className="thirtypercentwidth" />
              <col className="fourtypercentwidth" />
            </colgroup>
            <thead>
              <tr>
                <th>Weight</th>
                <th>BMI</th>
                <th>Date Recorded</th>
              </tr>
              {data.map((rowData,ind)=>{
                const isRowOnFocus = _.isEqual({ ...rowData, weight: 0 },activeRow );
                return (
                  <tr key={ind} className={`bmichart-table-row ${isRowOnFocus ? "in-focus" : ""}`}>
                    <td>{rowData.weight} lbs</td>
                    <td>{rowData.bmi} kg/m² </td>
                    <td>{moment(rowData.dateRecorded).format("LL")}</td>
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
  )
}

const ActiveMedicationCallout = ({dateRecorded,medicationList})=>{

    return (
      <div className="active-data-callout left p-2">
        <div className="pl-2 pb-2">Active Medications on {moment(dateRecorded).format('DD MMM YYYY')}</div>
        <div className="pl-3 pb-1">
          <b>Janumet</b> BID 50mg/1000mg PO
        </div>{" "}
        <div className="pl-3 pb-1">
          <b>Glimepiride</b> QD 2mg PO
        </div>{" "}
        <div className="pl-3 pb-1">
          <b>Pioglitazone</b> QD 30mg PO
        </div>
      </div>
    );
  };

export default BMIChart;
