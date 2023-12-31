import React, { useEffect, useRef, useContext } from "react";
import { Context } from "../../../context";
import style from "./Reviews.module.scss";
import Review from "./Review";
import ReviewsSlider from "./ReviewsSlider";

import person1 from "../../assets/persone/person1.svg";
import person2 from "../../assets/persone/person2.svg";
import person3 from "../../assets/persone/person3.svg";
import person4 from "../../assets/persone/person4.svg";
import person5 from "../../assets/persone/person5.svg";
import person6 from "../../assets/persone/person6.svg";

const people = [person1, person3, person2, person4, person5, person6];

const Reviews = () => {
  const reviewsRef = useRef();
  const {activeIndex} = useContext(Context)

  useEffect(() => {
    if (activeIndex === 1) {
      reviewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <div className={style.container}>
      <h2 ref={reviewsRef}>Відгуки користувачів</h2>
      
        <div className={style.reviews}>
          {people.map((item, i) => {
            return <Review key={i} item={item} i={i} />;
          })}
        </div>

      <div className={style.mobile}>
        <ReviewsSlider />
      </div>

      <p className={style.fix}>d</p>
    </div>
  );
};

export default Reviews;
