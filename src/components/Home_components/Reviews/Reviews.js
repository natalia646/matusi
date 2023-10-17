import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import style from "./Reviews.module.scss";
import Review from "./Review";

// import back from "../../assets/corousal/back.svg";
// import next from "../../assets/corousal/next.svg";
import person1 from "../../assets/persone/person1.png";
import person2 from "../../assets/persone/person2.png";
import person3 from "../../assets/persone/person3.png";
import person4 from "../../assets/persone/person4.png";
import person5 from "../../assets/persone/person5.png";
import person6 from "../../assets/persone/person6.png";

const people = [person1, person3, person2, person4, person5, person6];

const Reviews = () => {
  const reviewsRef = useRef();
  const { activeIndex } = useSelector((state) => state.activeIndex);

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
          return (
            <Review
              key={i}
              item={item}
              i={i}
            />
          );
        })}
      </div>
      <p className={style.fix}>dd</p>
    </div>
  );
};

export default Reviews;
