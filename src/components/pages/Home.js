import React, { Suspense, lazy } from "react";
import Main from "../Home_components/MainPart/Main";
import About from "../Home_components/About/About";
import Details from "../Home_components/Details/Details";

const Slider = lazy(() => import("../Home_components/Slider/Slider"));
const Reviews = lazy(() => import("../Home_components/Reviews/Reviews"));
const Questions = lazy(() => import("../Home_components/Questions/Questions"));

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <Details />
      <Suspense fallback={<div>Завантаження...</div>}>
        <section>
          <Slider />
          <Reviews />
          <Questions />
        </section>
      </Suspense>
    </>
  );
};

export default Home;
