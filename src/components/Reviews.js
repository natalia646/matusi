import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import style from "../scss/Reviews.module.scss";

import person1 from "../components/assets/persone/person1.png";
import person2 from "../components/assets/persone/person2.png";
import person3 from "../components/assets/persone/person3.png";
import person4 from "../components/assets/persone/person4.png";
import person5 from "../components/assets/persone/person5.png";
import person6 from "../components/assets/persone/person6.png";


const Reviews = () => {
  const { activeIndex } = useSelector((state) => state.activeIndex);
  const reviewsRef = useRef();
  useEffect(() => {
    if (activeIndex === 1) {
      reviewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeIndex]);

  const people = [person1, person3, person2, person4, person5, person6];
  const h3 = [
    "Інна Денисюк",
    "Олена Наконечна",
    "Марія Ковальчук",
    "Богдана Лучкова",
    "Діана Назар",
    "Анна Звадюк",
  ];
  const p = [
    "“Мама не вдома” - незамінний помічник для мам. Знайшла допомогу для своїх дітей легко і швидко. Задоволена результатом!",
    "Мені зручно знаходити допомогу для дітей, за допомогою цього додатка. Створила власну групу. Великий плюс для матерів!",
    "Організація догляду за дітьми ще ніколи не була такою легкою. Я знаходжу жінок, готових допомогти, коли потрібно. Рекомендую!",
    "Завдяки цьому додатку, я маю змогу працювати, не втрачаючи контроль над доглядом за дітьми. ",
    "Маю змогу працювати і знати, що мої діти в надійних руках завдяки цьому додатку. Велика підтримка для активних мам.",
    "Завдяки цьому додатку я швидко знаходжу допомогу для дітей. Він відкрив нові можливості спілкування для матерів.",
  ];

  return (
    <div  className={style.container}>
      <h2 ref={reviewsRef} >Відгуки користувачів</h2>
      <div className={style.reviews}>
        {people.map((item, i) => {
          return (
            <article key={i}>
              <img src={item} alt="person"></img>
              <div className={style.text}>
                <h3>{h3[i]}</h3>
                <p>{p[i]}</p>
              </div>
            </article>
          );
        })}
        <p className={style.fix}></p>
      </div>
    </div>
  );
};

export default Reviews;
