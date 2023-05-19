import React from "react";
import MyNav from "../components/MyNav";
import Hero from "../components/Hero";
import Main from "../components/Main";
import LatestRelease from "../components/LatestRelease";
import MyFooter from "../components/MyFooter";

const Home = () => {
  return (
    <>
      <MyNav />
      <Hero />
      <Main />
      <LatestRelease />
      <MyFooter />
    </>
  );
};

export default Home;
