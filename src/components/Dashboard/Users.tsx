import React from "react";
import users from "/svg/icon 4.svg";
import activeUsers from "/svg/icon (1).svg";
import loanUsers from "/svg/icon (2).svg";
import savingsUsers from "/svg/icon (3).svg";

function Users() {
  type userInfo = {
    icon: string;
    userType: string;
    amount: string;
  };
  let userTypes: userInfo[] = [
    {
      icon: users,
      userType: "Users",
      amount: "2,453",
    },
    {
      icon: activeUsers,
      userType: "ACTIVE USERS",
      amount: "2,453",
    },
    {
      icon: loanUsers,
      userType: "USERS WITH LOANS",
      amount: "12,453",
    },
    {
      icon: savingsUsers,
      userType: "USERS WITH SAVINGS",
      amount: "10,2453",
    },
  ];
  return (
    <div className="usersWrapper">
      <h1>Users</h1>
      <div className="usersRenderWrapper">
        {userTypes.map((content, index) => (
          <div className="usersRender" key={index}>
            <img src={content.icon} alt="" />
            <h2>{content.userType}</h2>
            <h3>{content.amount}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
