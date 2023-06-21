import React, { useState } from "react";
import DashboardDetails from "./DashboardDetails";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Dashboard({
  handleSidebar,
  showSidebar,
}: {
  handleSidebar(): void;
  showSidebar: boolean;
}) {
  // const [showSidebar, setShowSideBar] = useState(true);

  // const toggleSidebar = ():void => {
  //   setShowSideBar((prev) => !prev)
  // }
  // let ShowFilter = false
  // let ShowLogo = true
  return (
    <div className="dashboardContainer">
      <Header handleSidebar={handleSidebar} />
      {showSidebar && <Sidebar />}
      <main>
        <DashboardDetails />
      </main>
    </div>
  );
}

export default Dashboard;
