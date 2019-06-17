import React from "react";
import { hot } from "react-hot-loader";
import Highcharts from "highcharts";
import gantt from "highcharts/modules/gantt";
import { lineGraphData, ganttChartData } from "../../data";
import Button from "../../components/button";
import Sidebar from "../../components/Sidebar";
import "./main.scss";

class Highchart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    gantt(Highcharts);
  }
  changeGraph = e => {
    if (e.target.name === "linegraph") Highcharts.chart("chart", lineGraphData);
    else Highcharts.ganttChart("chart", ganttChartData);
  };
  render() {
    let mainComponent = <></>;
    mainComponent = (
      <>
        <p className="text">
          You are experiencing react-highcharts library. Select the type of
          chart you want to test
        </p>
      </>
    );
    return (
      <>
        <Sidebar>
          <Button
            name="linegraph"
            className="sidelink"
            onClick={this.changeGraph}
          >
            Line Graph
          </Button>
          <Button
            name="ganttchart"
            className="sidelink"
            onClick={this.changeGraph}
          >
            Gantt Chart
          </Button>
        </Sidebar>

        <div id="chart" className="main">
          {mainComponent}
        </div>
      </>
    );
  }
}

export default hot(module)(Highchart);
