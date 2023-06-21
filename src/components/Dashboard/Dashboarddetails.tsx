import React from "react";

import Users from "./Users";
import Table from "./Table";
function DashboardDetails() {
  return (
    <div className="dashBody">
      <div className="dashBodyWrapper">
        <Users />
        <Table />
      </div>
    </div>
  );
}

export default DashboardDetails;
