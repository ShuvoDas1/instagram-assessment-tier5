import React from "react";
import Post from "../post/Post";
import Stories from "../stories/Stories";
import "./Posts.scss";

const Posts = ({ posts }) => {
  return (
    <div>
      <div>
        <Stories stories={posts} />
      </div>
      <div className="posts__wrapper">
        {posts?.map((item, index) => (
          <Post key={index} post={item} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
