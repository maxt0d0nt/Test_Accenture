import React from "react";
import ReactApexChart from "react-apexcharts";

export class RadialBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [props.valorA, props.valorB, props.valorC],
        options: {
          chart: {
            height: 280,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Questions results',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 
                  }
                }
              }
            }
          },
          labels: ['Make a mistake', 'Take a risk', 'Unique skills and talents'],
        },
      };
    }
    render() {
      return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
        </div>
      );
    }
  }