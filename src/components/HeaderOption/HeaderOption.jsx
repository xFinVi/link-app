import React from "react";
import "./headeroption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userRedurer/userSlice";
import { TitleRounded } from "@mui/icons-material";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user =useSelector(selectUser);

  if (!user) {
    return null;
  }

  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={user?.photoUrl}>{user?.email[0]}</Avatar>}
      <h3 className="headerOption__title">{user.displayName}</h3>
    </div>
  );
}

export default HeaderOption;
