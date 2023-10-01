import React from 'react';
import Questions from "../Questions/Questions";
import About from "../AboutApp/About";
import Main from "../MainPart/Main";
import Details from "../AboutApp/Details";
import Reviews from "../Reviews/Reviews";
import Corousal from "../Corousal/Corousal"

const Home = () => {
  return (
    <main>
      <Main/>
      <About/>
      <Details/>
      <Corousal/>
      <Reviews/>
      <Questions />
    </main>
  )
}

export default Home
