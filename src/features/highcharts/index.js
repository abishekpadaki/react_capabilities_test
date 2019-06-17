import React from "react";
import { hot } from "react-hot-loader";
import ReactHighcharts from "react-highcharts";
import config from "../../data";
import Link from "../../components/Link";
import Sidebar from "../../components/Sidebar";
import "./main.scss";

class Highcharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: ""
    };
  }
  changeGraph = graph => {
    this.setState({
      graph: graph
    });
  };
  render() {
    return (
      <>
        <Sidebar>
          <button className="sidelink" onClick={this.changeGraph}>
            Line Graph
          </button>
        </Sidebar>
        <div className="main">
          <ReactHighcharts config={config}></ReactHighcharts>
        </div>
      </>
    );
  }
}

export default hot(module)(Highcharts);
