import React from "react";
import NavBar from "../components/NavBar";
import HomeContent from "../components/page-contents/home-page/HomeContent";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="home-content">
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
