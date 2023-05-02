import React from "react";
// import users from ;
// import activeUsers from ;
// import loanUsers from ;
// import savingsUsers from ;

function Users() {
  type userInfo = {
    icon: string;
    userType: string;
    amount: string;
  };
  let userTypes: userInfo[] = [
    {
      icon: "/svg/icon 4.svg",
      userType: "Users",
      amount: "2,453",
    },
    {
      icon: "/svg/icon (1).svg",
      userType: "ACTIVE USERS",
      amount: "2,453",
    },
    {
      icon: "/svg/icon (2).svg",
      userType: "USERS WITH LOANS",
      amount: "12,453",
    },
    {
      icon: "/svg/icon (3).svg",
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
