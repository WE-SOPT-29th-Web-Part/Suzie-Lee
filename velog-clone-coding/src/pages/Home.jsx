import React from "react";
import Header from "../components/common/Header";
import ArticlesContainer from "../components/home/ArticlesContainer";
import HomeNav from "../components/home/HomeNav";
import Profile from "../components/home/Profile";

const Home = () => {
  return (
    <div>
      <Header />
      <Profile />
      <HomeNav />
      <ArticlesContainer />
    </div>
  );
};

export default Home;
