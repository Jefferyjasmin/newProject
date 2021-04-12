import React from "react";
import "./SidebarOptions.css";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sideBarOptions ${active && "sidebBarOptions--active"}`}>
      <Icon />
      <h3>{text}</h3>
    </div>
  );
};
export default SidebarOption;
