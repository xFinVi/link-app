import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "../HeaderOption/HeaderOption";
import { logout, selectUser } from "../redux/userRedurer/userSlice";
import "./header.css";
import { auth } from "../../Utils/Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";

function Header() {

  const user =useSelector(selectUser)
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
    auth.signOut();
  }


  return (
    <div className="header">
      <div className="header__left">
        <LinkedInIcon style={{ fontSize: 50 }}/>
      </div>

      <div className="header__search">
        <SearchIcon />
        <input type="text" />
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={user} title="Fil" onClick={userLogout}/>
      </div>
    </div>
  );
}

export default Header;
