import React from "react";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import HomeCarousel from "../Header/HomeCarousel";
import Post from "../post/Post";
import Post1 from "../post/post1";
import Post2 from "../post/post2";
import Rightbar from "../../rightbar/Rightbar";
import SearchPost from "../../searchpost/SearchPost";

function Home() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: 64 }}>
        <Navbar />
        <HomeCarousel />

        <div style={{ display: "flex" }}>
          <div style={{ width: "68vw", marginLeft: 10 }}>
            <SearchPost />
            <Post />
            <Post1 />
            
          </div>
          <div style={{ width: "30vw", marginLeft: "1vw" }}>
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

