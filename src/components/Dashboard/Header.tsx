import React from "react";
import { Link } from "react-router-dom";

// import logo from "/svg/Group.svg";
// import SearchIcon from ;
// import NotificationBell from "/svg/headerNotification.svg";
// import dropdown from ;
// import Avatar from "/images/avatar.png";

function Header({ handleSidebar }: { handleSidebar(): void }) {
  return (
    <div className="dashboardHeader">
      <div className="leftHeader">
        <div className="logoWrapper">
          <img src="/svg/Group.svg" alt="" />
        </div>

        <div className="mobileNav">
          <a href="http://">Docs</a>
          <img src="/svg/headerNotification.svg" alt="" />
          <div className="currentUserDetails">
            <img src="/images/avatar.png" alt="" />
            <div className="dropdown">
              <h2>Adedeji</h2>
              <button>
                <img src="/svg/headerDropdown.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="dashboardSearchBar">
          <input type="text" placeholder="search for anything" />

          <button>
            <img src="/svg/searchIcon.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="rightHeader">
        <div className="sidebarToggler" onClick={handleSidebar}>
          <img src="/svg/bars.svg" alt="" />
        </div>
        <div className="dashboardSearchBar lowerSearchBar">
          <input type="text" placeholder="search for anything" />

          <button>
            <img src="/svg/searchIcon.svg" alt="" />
          </button>
        </div>
        <div className="desktopRightNav">
          <a href="http://">Docs</a>
          <img src="/svg/headerNotification.svg" alt="" />
          <div className="currentUserDetails">
            <img src="/images/avatar.png" alt="" />
            <div className="dropdown">
              <h2>Adedeji</h2>
              <button>
                <img src="/svg/headerDropdown.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
