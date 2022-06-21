import { Skeleton } from "@mui/material";
import React from "react";
import { Card, CardBody } from "reactstrap";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import './Post.scss';


const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="card__wrapper pb-4">
      <Card className='post'>
        <CardBody>
          {/* USER */}
          <div className="d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center">
              <img
                style={{ width: "40px", height: "40px" }}
                src={post?.user?.profile_picture}
                className="avatar-xs rounded-circle me-2 cursor-pointer"
                alt="User"
              />
              <span>{post?.user?.full_name}</span>
            </div>
            <h4>...</h4>
          </div>

          {/* POST */}

          <div className="post my-3">
            <img
              src={post?.images?.standard_resolution?.url}
              className="w-100"
              alt="Post"
            />
          </div>

          {/* LIKE COMMENT SHARE */}

          <div className="post__actions">
            <div className="left">
              <div className="item">
                <FavoriteBorderOutlinedIcon />
              </div>
              <div className="item">
                <MapsUgcOutlinedIcon />
              </div>
              <div className="item">
                <SendOutlinedIcon className="share__icon" />
              </div>
            </div>
            <div className="right">
              <div className="item">
                <BookmarkAddOutlinedIcon />
              </div>
            </div>
          </div>

          {/* LIKES */}

          <div className="likes mt-2">
            <span>{`${post?.likes} Likes`}</span>
          </div>

          {/* CAPTION */}

          <div className="caption mt-2">
            <span className="user__name">{post?.caption?.from?.full_name}</span>
            <span>{post?.caption?.text}</span>
          </div>

          {/* COMMENTS */}

          <div className="comments mt-2 text-muted">
            <span>{`View all ${post?.likes} comments`}</span>
          </div>

          {/* COMMENT BOX */}

          <div className="comment__box mt-2">
            <InsertEmoticonOutlinedIcon />
            <input
              className=" input w-100"
              type="text"
              placeholder="Add a comment..."
              id="search"
              autoComplete="off"
            />
            <span className='comment__btn'>Post</span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
