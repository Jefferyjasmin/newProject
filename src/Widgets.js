import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input
          className="widgets_inputField"
          type="text"
          placeholder="Search Twitter"
        />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetid={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 700 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "@reactjs is awesom", via: "jeff" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
