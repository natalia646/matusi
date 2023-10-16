import React from "react";

import Main from "../../Home_components/MainPart/Main";
import About from "../../Home_components/About/About";
import Details from "../../Home_components/Details/Details";
import Slider from "../../Home_components/Slider/Slider";
import Reviews from "../../Home_components/Reviews/Reviews";
import Questions from "../../Home_components/Questions/Questions";


const Home = () => {

  return (
    <div>
      <Main />
      <About />
      <Details />
      <Slider />
      <Reviews />
      <Questions />
    </div>
  );
};

export default Home;
