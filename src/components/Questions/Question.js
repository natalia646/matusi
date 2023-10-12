import React, { useState } from "react";
import style from "../../scss/Ouestions.module.scss";
import more from "../assets/more.svg";

const Question = ({ id, item }) => {
  const [active, setActeve] = useState(null);

  const clickQuestion = (id) => {
    if (id === active) {
      setActeve(null);
    } else {
      setActeve(id);
    }
  };

  return (
    <div className={style.item}>
      <div
        key={id}
        className={`${style.question} ${id === active ? style.q_open : ""}`}
        onClick={() => clickQuestion(id)}
      >
        <p>{item.q}</p>
        <img className={style.svg} src={more} alt="more"></img>
      </div>
      <div className={`${style.answer} ${id === active ? style.a_open : ""}`}>
        {item.a}
      </div>
    </div>
  );
};

export default Question;
