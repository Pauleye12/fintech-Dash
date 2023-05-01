import React from "react";
import { Link } from "react-router-dom";
import logo from "/svg/Group.svg";
import SearchIcon from "/svg/searchIcon.svg";
import NotificationBell from "/svg/headerNotification.svg";
import dropdown from "/svg/headerDropdown.svg";
import Avatar from "/images/avatar.png";
function Header({Logo}) {
  return (
    <div className="dashboardHeader">
      <div className="leftHeader">
        {Logo && (
          <div className="logoWrapper">
            <img src={logo} alt="" />
          </div>
        )}
        <div className="dashboardSearchBar">
          <input type="text" placeholder="search for anything" />
          <Link to="/User">
            <button>
              <img src={SearchIcon} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="rightHeader">
        <a href="http://">Docs</a>
        <img src={NotificationBell} alt="" />
        <div className="currentUserDetails">
          <img src={Avatar} alt="" />
          <div className="dropdown">
            <h2>Adedeji</h2>
            <button>
              <img src={dropdown} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
