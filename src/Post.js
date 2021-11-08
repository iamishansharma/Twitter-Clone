import React, { forwardRef } from "react";
import "./css/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = forwardRef(
  ({ displayName, username, verified, tweetText, image, avatar }, ref) => {
    const handleDelete = e => {};

    const handleEdit = e => {};

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{tweetText}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <EditIcon fontSize="small" onClick={handleEdit} />
            <DeleteIcon fontSize="small" onClick={handleDelete} />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
