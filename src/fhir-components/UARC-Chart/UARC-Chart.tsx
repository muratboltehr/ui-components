// Generated with util/create-component.js
import React from "react";
import _ from 'lodash';
import Highcharts, { color, PointClickEventObject } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from 'moment';
import { UARCChartProps } from "./UARC-Chart.types";
import "./UARC-Chart.scss";

interface IState {
  activeData:{
  uarc:string,
  dateRecorded:Date}
}
export class UARCChart extends React.Component<UARCChartProps> {
  state :IState = {
    activeData: this.props.tableData[0] ?? "",
  };

  updateActiveData = (event: React.ChangeEvent<PointClickEventObject>) => {
    const data = { uarc: event.target.y, dateRecorded: event.target.x };
    this.setState({ activeData: data });
  };
  MILLISECONDS_IN_DAY = 24 * 3600 * 1000;
  //  const MILLISECONDS_IN_WEEK = MILLISECONDS_IN_DAY * 7;
  MILLISECONDS_IN_MONTH = this.MILLISECONDS_IN_DAY * 30;
  MILLISECONDS_IN_TWO_MONTHS = this.MILLISECONDS_IN_MONTH * 2;
  convertChartData = (contentData) => {
    let chartData: any[][];

    return contentData.map((item) => {
      return Array(item.dateRecorded, item.uarc);
    });
  };

  options = {
    chart: {
      type: "line",
      width: 625,
      height: 450,
      style:{
       fontSize:".875rem"
      }
    },
    exporting: {
      enabled: false,
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
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      tickInterval: this.MILLISECONDS_IN_TWO_MONTHS,
      lineColor: '#00000080',
      lineWidth: 1,

      max: moment()
        .endOf("day")
        .add(1, "day")
        .valueOf(),
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
          value: moment()
            .endOf("day")
            .valueOf(),
            className: "chart-today-line",
            width:0

        },
      ],
    },
    yAxis: [{
      min: 0,
      max: 500,
      tickInterval:100,
      gridLineColor: '#D0D0CE',
      title: {
        text: this.props.yAxisTitle,  
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
      plotBands: [
        {
          from: 0,
          to: 30,
          className: "uarc-advance-range",
        },
        {
          from: 30,
          to: 300,
          className: "uarc-moderate-range",
        },
        {
          from: 300,
          to:500,
          className: "uarc-normal-range",
        }
      ] }],
    plotOptions: {  
     marker:{
      enabled:true
     } ,
		series: {
        color: '#2F1986',
        point: {
          events: {
            mouseOver: this.updateActiveData,
          },
        }
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
    series: [
      { 
        name: "A1C",
        data: this.convertChartData(this.props.tableData),
      },
    ],
  };

  render() {
    const { tableData ={} } = this.props;
    return (
        <div className="chart-container">
          <section className="chart-wrap">
            <HighchartsReact highcharts={Highcharts} options={this.options} />
            <div className='uarc-legend-container'>
              <ul>
                <li className="uarc-advance">Advanced Kidney Disease (UACR &gt; 300)</li>
                <li className="uarc-moderate">Moderate Kidney Disease (UACR 30-300)</li>
                <li className="uarc-normal">Normal range (UACR 0-30)</li>
              </ul>
            </div>
          </section>
          <section className="chart-table-wrap">
          <ChartDataTable data={tableData} activeRow={this.state.activeData}/>
          <ActiveMedicationCallout dateRecorded={this.state.activeData.dateRecorded} medicationList={[]}></ActiveMedicationCallout>
          </section>
        </div>
    );
  }
}

const ChartDataTable =({data,activeRow})=>{

  return(
    <div className="chart-table-contents">
        <table className="table table-sm table-striped chart-table">
          <colgroup>
            <col className="fourtypercentwidth" />
            <col className="sixtypercentwidth" />
          </colgroup>
          <thead>
            <tr>
              <th className="table-head-alc">UARC</th>
              <th className="table-head-date">Date Recorded</th>
            </tr>
            {data.map((rowData,ind) =>{
              const isRowOnFocus = _.isEqual(rowData, activeRow);
              return (
                <tr key={ind} className={`chart-table-row ${isRowOnFocus ? "in-focus" : ""}`}>
                  <td className="table-col-alc">{rowData.uarc} % </td>
                  <td className="table-col-date">
                    {/* {rowData.dateRecorded} */}
                    {moment(rowData.dateRecorded).format("LL")}
                  </td>
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


export default UARCChart;

