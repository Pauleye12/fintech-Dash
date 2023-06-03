import React from "react";
import Details from "./Details";
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
function UserInformations({ ID_Info }: { ID_Info: IdCont }) {
console.log(ID_Info);
  const Info = [
    {
      title: "Personal Information",
      details: [
        {
          subTitle: "FULL NAME",
          content: `${ID_Info.profile.firstName}`,
        },
        {
          subTitle: "PHONE NUMBER",
          content: `${ID_Info.phoneNumber}`,
        },
        {
          subTitle: "EMAIL ADDRESS",
          content: `${ID_Info.email}`,
        },
        {
          subTitle: "BVN",
          content: `${ID_Info.profile.bvn}`,
        },
        {
          subTitle: "GENDER",
          content: `${ID_Info.profile.gender}`,
        },
        {
          subTitle: "MARITAL STATUS",
          content: "SINGLE",
        },
        {
          subTitle: "CHILDREN",
          content: "NONE",
        },
        {
          subTitle: "TYPE OF RESIDENCE",
          content: "PARENTS APPARTMENT",
        },
      ],
    },
  ];
    
  return (
    <div>
      <div className="userInformationContainer">
        {Info.map((e, index) => (
          <Details key={index} Info={e} />
        ))}
              
            
      </div>
    </div>
  );
}

export default UserInformations;
