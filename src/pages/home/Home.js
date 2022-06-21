import React, { useEffect, useState } from "react";
import { data } from "../../assets/data";
import Posts from "../../components/posts/Posts";
import Suggestions from "../../components/suggestions/Suggestions";
import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify([data]),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setPosts(json[0].data));
  }, []);

  return (
    <div className="container">
      <div className="posts">
        <Posts posts={posts} />
      </div>
      <div className="suggetions">
        <Suggestions suggestions={posts} />
      </div>
    </div>
  );
};

export default Home;
