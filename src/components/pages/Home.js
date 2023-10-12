import React from "react";
import Questions from "../Questions/Questions";
import About from "../About";
import Main from "../Main";
import Details from "../Details";
import Reviews from "../Reviews/Reviews";
import Corousal from "../Corousal";

const Home = () => {

  return (
    <main>
      <Main />
      <About />
      <Details />
      <Corousal />
      <Reviews />
      <Questions />
    </main>
  );
};

export default Home;
