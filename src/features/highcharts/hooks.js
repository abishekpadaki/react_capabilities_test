import React, {useState, useEffect } from 'react';
import { hot } from "react-hot-loader";
import Highcharts from "highcharts";
import gantt from "highcharts/modules/gantt";
import { lineGraphData, ganttChartData } from "../../data";
import Button from "../../components/button";
import Sidebar from "../../components/Sidebar";
import "./main.scss";


const Highchart = () => {
    const [count,setCount] = useState(0);
    const [a,seta] = useState();
    useEffect(()=>{
        gantt(Highcharts);
    });
    const changeGraph = e => {
        if (e.target.name === "linegraph") Highcharts.chart("chart", lineGraphData);
        else Highcharts.ganttChart("chart", ganttChartData);
        setCount(count+1);
        console.log(count);
    };
    let mainComponent = <></>;
    mainComponent = (
      <>
        <p className="text">
          You are experiencing highcharts library. Select the type of chart you
          want to test
        </p>
      </>
    );
    return (
      <>
        <Sidebar>
          <Button
            name="linegraph"
            className="sidelink"
            onClick={changeGraph}
          >
            Line Graph
          </Button>
          <Button
            name="ganttchart"
            className="sidelink"
            onClick={changeGraph}
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

export default hot(module)(Highchart);
