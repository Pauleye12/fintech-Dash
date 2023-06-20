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
interface details {
  subTitle: string;
  content: string;
}
interface InfoSchema {
      title: string,
      details: details[],
    }
function UserInformations({ ID_Info }: { ID_Info: IdCont }) {
console.log(ID_Info);
  const Info: InfoSchema[] = [
    {
      title: "Personal Information",
      details: [
        {
          subTitle: "FULL NAME",
          content: `${ID_Info.profile.firstName} ${ID_Info.profile.lastName}`,
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
    {
      title: "Education and Employment",
      details: [
        {
          subTitle: "LEVEL OF EDUCATION",
          content: `${ID_Info.education.level}`,
        },
        {
          subTitle: "EMPLOYMENT STATUS",
          content: `${ID_Info.education.employmentStatus}`,
        },
        {
          subTitle: "SECTOR OF EMPLOYMENT",
          content: `${ID_Info.education.sector}`,
        },
        {
          subTitle: "DURATION OF EMPLOYMENT",
          content: `${ID_Info.education.duration}`,
        },
        {
          subTitle: "OFFICE EMAIL",
          content: `${ID_Info.education.officeEmail}`,
        },
        {
          subTitle: "MONTHLY INCOME",
          content: `${ID_Info.education.monthlyIncome}`,
        },
        {
          subTitle: "LOAN REPAYMENT",
          content: `${ID_Info.education.loanRepayment}`,
        },
      ],
    },
    {
      title: "Socials",
      details: [
        {
          subTitle: "TWITTER",
          content: `${ID_Info.socials.twitter}`,
        },
        {
          subTitle: "FACEBOOK",
          content: `${ID_Info.socials.facebook}`,
        },
        {
          subTitle: "INSTAGRAM",
          content: `${ID_Info.socials.instagram}`,
        },
      ],
    },
    {
      title: "Guarantor",
      details: [
        {
          subTitle: "FULL NAME",
          content: `${ID_Info.guarantor.firstName} ${ID_Info.guarantor.lastName}`,
        },
        {
          subTitle: "PHONE NUMBER",
          content: `${ID_Info.guarantor.phoneNumber}`,
        },
        {
          subTitle: "ADDRESS",
          content: `${ID_Info.guarantor.address}`,
        },
        {
          subTitle: "GENDER",
          content: `${ID_Info.guarantor.gender}`,
        },
      ],
    },
  ];
    
  return (
    
      <div className="userInformationContainer">
        {Info.map((e, index) => (
          <Details key={index} Info={e} />
        ))}
              
            
      </div>
  );
}

export default UserInformations;
