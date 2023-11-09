import React, { Suspense } from "react";
import Main from "../Home_components/MainPart/Main";
import About from "../Home_components/About/About";
import Details from "../Home_components/Details/Details";

const Slider = React.lazy(() => import("../Home_components/Slider/Slider"));
const Reviews = React.lazy(() =>
  import("../Home_components/Reviews/Reviews")
);
const Questions = React.lazy(() =>
  import("../Home_components/Questions/Questions")
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
          <Reviews />
          <Questions />
        </section>
      </Suspense>
    </div>
  );
};

export default Home;
