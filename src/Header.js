import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOption from "./HeaderOption";
import HouseIcon from '@mui/icons-material/House';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <LinkedInIcon
          color="primary"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HouseIcon} title="Home"/>
        <HeaderOption Icon={PeopleIcon} title="My Network"/>
        <HeaderOption Icon={WorkIcon} title="Jobs"/>
        <HeaderOption Icon={MessageIcon} title="Message"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption Icon={AccountCircleIcon} title="Me"/>
      </div>
    </div>
  );
}

export default Header;
