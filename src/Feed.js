import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./css/Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  const getTweets = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:8080/tweets",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log("Yeah error: ", error);
      });
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox setPosts={setPosts} />

      <FlipMove>
        {posts.map(post => (
          <Post
            key={post.tweetId}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            tweetText={post.tweetText}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
