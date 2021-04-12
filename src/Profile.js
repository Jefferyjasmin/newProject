import React from "react";
import "./Profile.css";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import ChatIcon from "@material-ui/icons/Chat";
import EmailIcon from "@material-ui/icons/Email";
const Profile = () => {
  return (
    <div className="profile">
      <div>
        <h3 className="profile_title"> Profile </h3>
      </div>

      <div className="profile_info">
        <div className="profile_img">
          <img
            src="https://i.pinimg.com/originals/bc/4a/62/bc4a628d9e88bd8dc9915ab9ae52c316.jpg"
            alt="profile"
            style={{ height: 600, width: 400 }}
          />
        </div>
        <div className="profile_contact">
          <div className="profile_name">
            <h3> Jefferycrown</h3>
            <p> SoftWear Engineer</p>
          </div>
          <div className="profile_contactinfo">
            <div className="profile_contact_info">
              <EmailIcon /> <div> Jeffery@gmail.com</div>
            </div>
            <div className="profile_contact_info">
              <ChatIcon />
              <div>Chat</div>
            </div>
            <div className="profile_contact_info">
              <PermPhoneMsgIcon />
              <div>1-347-000-000</div>
            </div>
          </div>
        </div>
        <div className="profile_Button"></div>
      </div>
    </div>
  );
};

export default Profile;
