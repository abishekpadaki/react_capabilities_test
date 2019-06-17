import React from "react";
import { hot } from "react-hot-loader";
import Link from "../../components/Link";
import "./main.scss";
const Dashboard = () => {
  return (
    <div className="background">
      <p className="heading">Select a react library you want to experience</p>
      <div className="flexbox">
        <Link className="card" to="/highcharts">
          Highcharts
        </Link>
        <Link className="card" to="/d3">
          D3js
        </Link>
        <Link className="card" to="/compare">
          Compare Both
        </Link>
      </div>
    </div>
  );
};

// export default Dashboard;
export default hot(module)(Dashboard);
