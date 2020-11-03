import React, { FC } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";

type A1CChartProps = {
  yAxisTitle?: string;
  showDataTable?: boolean;
  tableData?: any[];
  targetA1C?: any;
};

const A1CChartFC: FC<A1CChartProps> = ({
  yAxisTitle,
  showDataTable,
  tableData,
  targetA1C,
}) => {
  const MILLISECONDS_IN_DAY = 24 * 3600 * 1000;
  //  const MILLISECONDS_IN_WEEK = MILLISECONDS_IN_DAY * 7;
  const MILLISECONDS_IN_MONTH = MILLISECONDS_IN_DAY * 30;
  const MILLISECONDS_IN_TWO_MONTHS = MILLISECONDS_IN_MONTH * 2;

  const loadTableRow = (rowData: any) => {
    return (
      <tr>
        <td>{(Math.round(rowData.a1c * 100) / 100).toFixed(2)} % </td>
        <td>
          {/* {rowData.dateRecorded} */}
          {moment(rowData.dateRecorded)
            .add(1, "day")
            .format("LL")}
        </td>
      </tr>
    );
  };

  const convertChartData = (contentData: any) => {
    let chartData: any[][];

    return contentData.map((item: any) => {
      return Array(item.dateRecorded, item.a1c);
    });
  };

  const loadDataTable = (contentData: any) => {
    return (
      <div className="col">
        <div className="charttablecontents">
          <table className="table table-sm table-striped chart-table">
            <colgroup>
              <col className="thirtypercentwidth" />
              <col className="fourtypercentwidth" />
            </colgroup>
            <thead>
              <tr>
                <th>A1C</th>
                <th>Date Recorded</th>
              </tr>
              {contentData.map((item: any) => loadTableRow(item))}
            </thead>
          </table>
        </div>
      </div>
    );
  };

  const options = {
    chart: {
      type: "line",
      width: 625,
      height: 450,
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
      tickInterval: MILLISECONDS_IN_TWO_MONTHS,
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
          fontSize: "1em",
        },
      },
      plotLines: [
        {
          value: moment()
            .endOf("day")
            .valueOf(),

          zIndex: 123456789,
          className: "chart-today-line",
        },
      ],
    },
    yAxis: {
      title: {
        text: yAxisTitle,
      },
      labels: {
        style: {
          fontSize: "1em",
        },
      },
      min: 4,
      max: 10,
      plotBands: [
        {
          label: {
            text: "Non-Diabetic: 4.0 to 5.6",
            align: "right",
            textAlign: "right",
            x: -10,
          },
          from: 4,
          to: 5.6,
          className: "chart-normal-range",
        },
        {
          label: {
            text: "Prediabetes: 5.7 to 6.5",
            align: "right",
            textAlign: "right",
            x: -10,
          },
          from: 5.6,
          to: 6.5,
          className: "chart-sub-normal-range",
        },
        {
          label: {
            text: "Diabetes: 6.5 to 9",
            align: "right",
            textAlign: "right",
            x: -10,
          },
          from: 6.5,
          to: 9,
          className: "chart-high-range",
        },
        {
          label: {
            text: "Not well controlled: > 9",
            align: "right",
            textAlign: "right",
            x: -10,
          },
          from: 9,
          to: 15,
          className: "chart-highest-range",
        },
      ],
      plotLines: [
        {
          value: 4,
          className: "chart-normal-range-line",
        },
        {
          value: 8,
          className: "chart-normal-range-line",
        },
        {
          value: targetA1C,
          zIndex: 123456789,
          label: {
            text: "Patient A1C Target (" + targetA1C + "%)",
            useHTML: true,
            y: -5,
            x: 5,
            style: {
              color: "#90BC53",
              fontWeight: "bold",
            },
          },
          className: "chart-a1c-patient-target",
        },
      ],
    },
    plotOptions: {
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
        data: convertChartData(tableData),
      },
    ],
  };
  return (
    <div className="w-100 clearfix">
      <div className="chart popover-chart-contents left">
        <div className="highcharts-container">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
      <div className="popover-table-contents left">
        {showDataTable && loadDataTable(tableData)}
      </div>
    </div>
    // <div className="chart popover-chart-contents left">
    //   <div className="row">
    //     <div className="highcharts-container">
    //       <HighchartsReact highcharts={Highcharts} options={options} />
    //     </div>
    //     <div className="popover-table-contents left">
    //       {showDataTable && loadDataTable(tableData)}
    //     </div>
    //   </div>
    // </div>
  );
};

export default A1CChartFC;
