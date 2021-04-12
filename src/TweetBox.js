import { Avatar, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./TweetBox.css";
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Jefferycrown",
      image: tweetImage,
      username: "Kingjaz",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://i.pinimg.com/originals/bc/4a/62/bc4a628d9e88bd8dc9915ab9ae52c316.jpg",
    });
    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      TweetBox
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://i.pinimg.com/originals/bc/4a/62/bc4a628d9e88bd8dc9915ab9ae52c316.jpg" />
          <input
            type="text"
            placeholder="whats happening"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          placeholder="Optional: Enter image url"
          className="tweetBox_imageInput"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox_Button">
          Enter
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
