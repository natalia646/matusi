import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import style from "../../scss/Reviews.module.scss";
import Review from "./Review";

import person1 from "../assets/persone/person1.png";
import person2 from "../assets/persone/person2.png";
import person3 from "../assets/persone/person3.png";
import person4 from "../assets/persone/person4.png";
import person5 from "../assets/persone/person5.png";
import person6 from "../assets/persone/person6.png";

const people = [person1, person3, person2, person4, person5, person6];

const Reviews = () => {
  const reviewsRef = useRef();
  const { activeIndex } = useSelector((state) => state.activeIndex);
  const [activeId, setActiveId] = useState(0);
  const [activeRight, setRight] = useState(activeId + 1);
  const [activeLeft, setLeft] = useState(activeId - 1);

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
              activeId={activeId}
              right={activeRight}
              left={activeLeft}
            />
          );
        })}
      </div>

      <div className={style.circle_buttons}>
        {people.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setActiveId(idx)}
              className={`${style.circle} ${
                activeId === idx ? style.circle_active : ""
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
