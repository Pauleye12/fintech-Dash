import React from "react";

import Users from "./Users";
import Table from "./Table";
function Dashboarddetails() {
  return (
    <div className="dashBody">
      <div className="dashBodyWrapper">
        <Users />
        <Table />
      </div>
    </div>
  );
}

export default Dashboarddetails;
