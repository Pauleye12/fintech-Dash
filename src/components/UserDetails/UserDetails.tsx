import React, { useState, useEffect, useCallback } from "react";
import Header from "../Dashboard/Header";
import Sidebar from "../Dashboard/Sidebar";
import UserDeatailsHeader from "./UserDeatailsHeader";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserInformations from "./UserInformations";

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
function UserDetails({
  handleSidebar,
  showSidebar,
}: {
  handleSidebar(): void;
  showSidebar: boolean;
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  let ShowLogo: boolean = true;
  const [ID_Info, setID_Info] = useState<IdCont | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    const fetchUserData = async () => {
      try {
        const res = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/" +
            id
        );
        const resJson: IdCont = await res.json();
        setID_Info(resJson);
        setIsLoading(false);
        
      } catch (error) {
        setIsLoading(false)
        alert("error.message");
        console.log("error fetching data");
      }
    };
    fetchUserData();
  }, []);

  
  return (
    <div className="dashboardContainer userDetailsContainer">
      <Header handleSidebar={handleSidebar} />
      {showSidebar && <Sidebar />}
      <main className="">
        <Link to="/Dashboard">
          <div className="backToUser">
            <img src="/svg/backToUser.svg" alt="" />
            <h2>Back To User</h2>
          </div>
        </Link>
        <div className="userOptions">
          <h1>User Details</h1>
          <div>
            <button className="blacklist">BLACKLIST USER</button>
            <button className="activate">ACTIVATE USER</button>
          </div>
        </div>
        {isLoading? <div>Loading, please wait</div>: ID_Info && (
          <div className="userDetailsInfo">
            <div className="userDetailsHeaderWrapper">
              <UserDeatailsHeader ID_Info={ID_Info} />
            </div>
            <UserInformations ID_Info={ID_Info} />
          </div>
        )}
      </main>
    </div>
  );
}

export default UserDetails;
