import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ForumIcon from "@material-ui/icons/Forum";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1> sidebar </h1>
      <ForumIcon className="sideBar_twitterIcon" />
      <Link to="/profile">
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      </Link>
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="BookMarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sideBar_tweet" fullWidth>
        Enter
      </Button>
    </div>
  );
};
export default Sidebar;
