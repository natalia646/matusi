import React, { Suspense } from 'react';

import "./Home.css";
import Main from "../../Home_components/MainPart/Main";
import About from "../../Home_components/About/About";
import Details from "../../Home_components/Details/Details";
// import Slider from "../../Home_components/Slider/Slider";
// import Reviews from "../../Home_components/Reviews/Reviews";
// import ReviewsSlidet from "../../Home_components/Reviews/ReviewsSlider";
// import Questions from "../../Home_components/Questions/Questions";

const Slider = React.lazy(() =>
  import("../../Home_components/Slider/Slider"));
const Reviews = React.lazy(() =>
  import("../../Home_components/Reviews/Reviews")
);
const ReviewsSlidet = React.lazy(() =>
  import("../../Home_components/Reviews/ReviewsSlider")
);
const Questions = React.lazy(() =>
  import("../../Home_components/Questions/Questions")
);

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Details />
      <Suspense fallback={<div>Завантаження...</div>}>
        <section>
          <Slider />
          <span className="home-desctop">
            <Reviews />
          </span>
          <span className="home-mobile">
            <ReviewsSlidet />
          </span>
          <Questions />
        </section>
      </Suspense>
    </div>
  );
};

export default Home;
