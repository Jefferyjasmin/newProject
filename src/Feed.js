import React, { useState, useEffect } from "react";
import "./Feed.css";
import FlipMove from "react-flip-move";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";
const Feed = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed_header">
        <h2> Home page</h2>
      </div>
      <div className="feed_tweetBoc">
        <TweetBox />
        <FlipMove>
          {post.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              image={post.image}
              avatar={post.avatar}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Feed;
