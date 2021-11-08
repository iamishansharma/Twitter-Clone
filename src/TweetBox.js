import React, { useState } from "react";
import "./css/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import AvatarImage from "./assets/Avatar.jpg";

function TweetBox({ setPosts }) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const postTweet = async (tweetObj, setPosts) => {
    var axios = require("axios");
    var data = JSON.stringify(tweetObj);

    var config = {
      method: "post",
      url: "http://localhost:8080/tweet",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setPosts(oldarray => [tweetObj, ...oldarray]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const sendTweet = e => {
    e.preventDefault();

    const tweetObj = {
      displayName: "Ishan Sharma",
      username: "iamishansharma",
      verified: false,
      tweetText: `${tweetMessage}`,
      avatar: "https://picsum.photos/200",
      image: `${tweetImage}`,
    };
    postTweet(tweetObj, setPosts);

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={AvatarImage} />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
