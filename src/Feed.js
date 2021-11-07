import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./css/Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([
    {
      tweetId: 1,
      tweetText: "Hey, this is my first tweet",
      displayName: "Ishan Sharma",
      username: "iamishansharma",
      verified: true,
      avatar: "https://picsum.photos/200",
      image: "https://picsum.photos/300/200",
    },
  ]);

  useEffect(() => {}, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

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
