import React from "react";
import Dashboarddetails from "../Dashboard/DashboardDetails";
import Header from "../Dashboard/Header";

function FilterDashboard() {
  let ShowFilter: boolean = true
  let ShowLogo: boolean = false
  return (
    <div className="filterDashboard">
      <section>
        <nav>
          <Header Logo ={ShowLogo} />
        </nav>
        <main>
          <Dashboarddetails Filter={ShowFilter} />
        </main>
      </section>
    </div>
  );
}

export default FilterDashboard;
