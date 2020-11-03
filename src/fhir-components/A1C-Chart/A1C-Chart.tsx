// Generated with util/create-component.js
import React, { Component } from "react";
import Highcharts, { color, PointClickEventObject } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { A1CChartProps } from "./A1C-Chart.types";
import _ from "lodash";

import "./A1C-Chart.scss";
import moment from "moment";

interface IState {
  activeData:{
  a1c:string,
  dateRecorded:Date}
}

export class A1CChart extends Component<A1CChartProps> {
  state :IState = {
    activeData: this.props.tableData[0] ?? "",
  };

  updateActiveData = (event: React.ChangeEvent<PointClickEventObject>) => {
    const data = { a1c: event.target.y, dateRecorded: event.target.x };
    this.setState({ activeData: data });
  };
  MILLISECONDS_IN_DAY = 24 * 3600 * 1000;
  //  const MILLISECONDS_IN_WEEK = MILLISECONDS_IN_DAY * 7;
  MILLISECONDS_IN_MONTH = this.MILLISECONDS_IN_DAY * 30;
  MILLISECONDS_IN_TWO_MONTHS = this.MILLISECONDS_IN_MONTH * 2;
  convertChartData = (contentData) => {
    let chartData: any[][];

    return contentData.map((item) => {
      return Array(item.dateRecorded, item.a1c);
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
    // tooltip: {
    //   useHTML: true,
    //   shared: true,
    //   formatter: function() {
    //     return formatChartTooltip(this, '%', 'a1c');
    //   },
    //   style: {
    //     fontSize: '.7em',
    //     display: 'none'
    //   },
    //   positioner: function() {
    //     return {x: 800, y: 600 };
    //   }
    // },
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
      min: 4,
      max: 10,
      plotBands: [
        {
          from: 4,
          to: 5.6,
          className: "chart-normal-range",
        },
        {
          from: 5.6,
          to: 6.5,
          className: "chart-sub-normal-range",
        },
        {
          from: 6.5,
          to: 9,
          className: "chart-high-range",
        },
        {
          from: 9,
          to: 15,
          className: "chart-highest-range",
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
            <div className='a1c-legend-container'>
              <ul>
                <li className="legend-highest">Not well controlled (A1C &gt; 9%)</li>
                <li className="legend-high">Diabetes (A1C 6.5-9%)</li>
                <li className="legend-low">Prediabetes (A1C 5.7-6.5%)</li>
                <li className="legend-normal">Non-Diabetic (A1C 4-5.6%)</li>
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
              <th className="table-head-alc">A1C</th>
              <th className="table-head-date">Date Recorded</th>
            </tr>
            {data.map((rowData,ind) =>{
              const isRowOnFocus = _.isEqual(rowData, activeRow);
              const  dateRecorded = moment(rowData.dateRecorded).format("LL")
              return (
                <tr key={ind} className={`chart-table-row ${isRowOnFocus ? "in-focus" :""}`}>
                  <td className="table-col-alc">{rowData.a1c} % </td>
                  <td className="table-col-date">
                    {dateRecorded}
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


export default A1CChart;
