import React from "react";

import CustomerSection from "./CustomerSection";

function Sidebar() {
  type customerArrayDets = {
    icon: string;
    text: string;
  };

  let customerArray: customerArrayDets[] = [
    {
      icon: "/svg/user-friends 1.svg",
      text: "Users",
    },
    {
      icon: "/svg/users 1.svg",
      text: "Guarantors",
    },
    {
      icon: "/svg/sack 1.svg",
      text: "Loans",
    },
    {
      icon: "/svg/handshake-regular 1.svg",
      text: "Decision Models",
    },
    {
      icon: "/svg/piggy-bank 1.svg",
      text: "Savings",
    },
    {
      icon: "/svg/Group 104.svg",
      text: "Loan Requests",
    },
    {
      icon: "/svg/user-check 1.svg",
      text: "Whitelist",
    },
    {
      icon: "/svg/user-times 1.svg",
      text: "karma",
    },
  ];

  let businessArray: customerArrayDets[] = [
    {
      icon: "/svg/briefcase 1.svg",
      text: "Organisation",
    },
    {
      icon: "/svg/Group 104.svg",
      text: "Loan Products",
    },
    {
      icon: "/svg/np_bank_148501_000000 1.svg",
      text: "Saving Products",
    },
    {
      icon: "/svg/coins-solid 1.svg",
      text: "Fees and Charges",
    },
    {
      icon: "/svg/icon.svg",
      text: "Transactions",
    },
    {
      icon: "/svg/galaxy 1.svg",
      text: "Service",
    },
    {
      icon: "/svg/user-cog 1.svg",
      text: "Service Account",
    },
    {
      icon: "/svg/scroll 1.svg",
      text: "Settlements",
    },
    {
      icon: "/svg/chart-bar 2.svg",
      text: "Reports",
    },
  ];

   let settingsArray: customerArrayDets[] = [
     {
       icon: "/svg/sliders-h 1.svg",
       text: "Prefrence",
     },
     {
       icon: "/svg/badge-percent 1.svg",
       text: "Fees and Pricing",
     },
     {
       icon: "/svg/clipboard-list 1.svg",
       text: "Audit Logs",
     },
    
   ];

  return (
    <div className="sidebarWrapper">
      <div className="sidebarContainer">
        <div className="firstSidebarContent">
          <div className="switchOrganization sidebarOptions">
            <img src="/svg/briefcase 1.svg" alt="" />
            <h2>Switch Organization</h2>
            <img src="/svg/dropdownSidebar.svg" alt="" />
          </div>
          <div className="sidebarOptions">
            <img src="/svg/home 1.svg" alt="" />
            <h2>Dashboard</h2>
          </div>
        </div>
        <div className="secondSidebarContent">
          <div className="customerSidebar secondContent">
            <h1 className="sectionHeader">customer</h1>
            <div>
              <CustomerSection data={customerArray} />
            </div>
          </div>

          <div className="businessesSidebar secondContent">
            <h1 className="sectionHeader">businesses</h1>
            <div>
              <CustomerSection data={businessArray} />
            </div>
          </div>

          <div className="settingsSidebar secondContent">
            <h1 className="sectionHeader">settings</h1>
            <div>
              <CustomerSection data={settingsArray} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
