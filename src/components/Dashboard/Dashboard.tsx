import React from "react";
import Dashboarddetails from "./Dashboarddetails";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Dashboard() {
  let ShowFilter: boolean = false
  let ShowLogo: boolean = true
  return (
    <div className="dashboardContainer">
      <Header Logo={ShowLogo} />
      <Sidebar />
      <main>
        <Dashboarddetails Filter= {ShowFilter} />
      </main>
    </div>
  );
}

export default Dashboard;
