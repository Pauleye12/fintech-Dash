import React from "react";


interface IdCont {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: { facebook: string; instagram: string; twitter: string };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: [string, string];
    loanRepayment: string;
  };
  id: string;
}
function UserDeatailsHeader({ ID_Info }: { ID_Info: IdCont }) {
  return (
    <div className="userDetailsHeaderContainer">
      <div className="userBasicInfo">
        <div className="userBasicInfoImg">
          <img src="/svg/avatar.svg" alt="" />
          <div className="userBasicInfoName">
            <h1>Grace Effiom</h1> <h2>87485u894</h2>
          </div>
        </div>
        <div className="userTiers">
          <h2>User's Tier</h2>
          <div className="tiersRating">
            <img src="/svg/filledStar.svg" alt="" />
            <img src="/svg/emptyStar.svg" alt="" />
            <img src="/svg/emptyStar.svg" alt="" />
          </div>
        </div>
        <div className="userBalance">
          <h2>#200,000.00</h2>
          <p>3123361708/FirstBank</p>
        </div>
      </div>
      <div className="userDetailsOptions">
        <ul>
          <li>General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </div>
    </div>
  );
}

export default UserDeatailsHeader;
