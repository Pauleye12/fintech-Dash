import React from "react";
import briefcase from "/svg/briefcase 1.svg";
import dropdown from "/svg/dropdownSidebar.svg";
import home from "/svg/home 1.svg";
import user from "/svg/user-friends 1.svg";
import guarantor from "/svg/users 1.svg";
import loans from "/svg/sack 1.svg";
import decision from "/svg/handshake-regular 1.svg";
import loanReq from "/svg/Group 104.svg";
import savings from "/svg/piggy-bank 1.svg";
import whitelist from "/svg/user-check 1.svg";
import karma from "/svg/user-times 1.svg";
import CustomerSection from "./CustomerSection";
import savingsProduct from "/svg/np_bank_148501_000000 1.svg";
import fees from "/svg/coins-solid 1.svg";
import transaction from "/svg/icon.svg";
import services from "/svg/galaxy 1.svg";
import serviceAccount from "/svg/user-cog 1.svg";
import settlements from "/svg/scroll 1.svg";
import reports from "/svg/chart-bar 2.svg";
import preference from "/svg/sliders-h 1.svg";
import pricing from "/svg/badge-percent 1.svg";
import audit from "/svg/clipboard-list 1.svg";

function Sidebar() {
  type customerArrayDets = {
    icon: string;
    text: string;
  };

  let customerArray: customerArrayDets[] = [
    {
      icon: `${user}`,
      text: "Users",
    },
    {
      icon: `${guarantor}`,
      text: "Guarantors",
    },
    {
      icon: `${loans}`,
      text: "Loans",
    },
    {
      icon: `${decision}`,
      text: "Decision Models",
    },
    {
      icon: `${savings}`,
      text: "Savings",
    },
    {
      icon: `${loanReq}`,
      text: "Loan Requests",
    },
    {
      icon: `${whitelist}`,
      text: "Whitelist",
    },
    {
      icon: `${karma}`,
      text: "karma",
    },
  ];

  let businessArray: customerArrayDets[] = [
    {
      icon: briefcase,
      text: "Organisation",
    },
    {
      icon: loanReq,
      text: "Loan Products",
    },
    {
      icon: savingsProduct,
      text: "Saving Products",
    },
    {
      icon: fees,
      text: "Fees and Charges",
    },
    {
      icon: transaction,
      text: "Transactions",
    },
    {
      icon: services,
      text: "Service",
    },
    {
      icon: serviceAccount,
      text: "Service Account",
    },
    {
      icon: settlements,
      text: "Settlements",
    },
    {
      icon: reports,
      text: "Reports",
    },
  ];

   let settingsArray: customerArrayDets[] = [
     {
       icon: preference,
       text: "Prefrence",
     },
     {
       icon: pricing,
       text: "Fees and Pricing",
     },
     {
       icon: audit,
       text: "Audit Logs",
     },
    
   ];

  return (
    <div className="sidebarWrapper">
      <div className="sidebarContainer">
        <div className="firstSidebarContent">
          <div className="switchOrganization sidebarOptions">
            <img src={briefcase} alt="" />
            <h2>Switch Organization</h2>
            <img src={dropdown} alt="" />
          </div>
          <div className="sidebarOptions">
            <img src={home} alt="" />
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
