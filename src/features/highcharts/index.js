import React from "react";
import { hot } from "react-hot-loader";
import ReactHighcharts from "react-highcharts";
import config from "../../data";
import Button from "../../components/button";
import Sidebar from "../../components/Sidebar";
import "./main.scss";

class Highcharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: ""
    };
  }
  changeGraph = e => {
    this.setState({
      graph: e.target.name
    });
  };
  render() {
    const { graph } = this.state;
    let mainComponent = <></>;
    switch (graph) {
      case "linegraph":
        mainComponent = <ReactHighcharts config={config}></ReactHighcharts>;
        break;
      default:
        mainComponent = (
          <>
            <p className="text">
              You are experiencing react-highcharts library
            </p>
            <p className="text">Select the type of chart you want to test</p>
          </>
        );
    }
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
        </Sidebar>
        <div className="main">{mainComponent}</div>
      </>
    );
  }
}

export default hot(module)(Highcharts);
