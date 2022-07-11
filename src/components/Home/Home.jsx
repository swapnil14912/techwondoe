import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home}>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;
