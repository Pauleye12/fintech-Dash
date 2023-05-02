import React from "react";
import DashboardDetails from "./DashboardDetails";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Dashboard() {
  let ShowFilter = false
  let ShowLogo = true
  return (
    <div className="dashboardContainer">
      <Header Logo ={ShowLogo} />
      <Sidebar />
      <main>
        <DashboardDetails Filter= {ShowFilter} />
      </main>
    </div>
  );
}

export default Dashboard;
