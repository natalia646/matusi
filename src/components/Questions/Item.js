import React, { useRef, useState } from "react";
import style from "./Ouestions.module.scss";
import more from "../assets/more.svg";
import less from "../assets/less.svg";

const Item = ({ id, item }) => {
  const refItem = useRef(null);
  const [active, setActeve] = useState(null);

  const clickQuestion = (id) => {
    if (id === active) {
      setActeve(null);
    } else {
      setActeve(id);
    }
  };

  return (
    <div>
      <div
        key={id}
        className={`${style.question} ${id === active ? style.q_open : ""}`}
        onClick={() => clickQuestion(id)}
      >
        <p>{item.q}</p>
        <img
          className={style.svg}
          src={more}
          alt="more"
        ></img>
      </div>
      <div className={`${style.answer} ${id === active ? style.a_open : ""}`}>
        {item.a}
      </div>
    </div>
  );
};

export default Item;
