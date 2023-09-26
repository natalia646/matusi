import React, {useState} from "react";
import style from "./Ouestions.module.scss";
import more from "../assets/more.svg";
import less from "../assets/less.svg";

const Item = ({ id, item}) => {

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
      <li
        key={id}
        className={`${style.question} ${id === active ? style.q_open : ""}`}
        onClick={() => clickQuestion(id)}
      >
        <p>{item.q}</p>
        <img
          className={style.svg}
          src={id === active ? less : more}
          alt="more"
        ></img>
      </li>
      <div>
        <pre className={`${style.answer} ${id === active ? style.open : ""}`}>
          {item.a}
        </pre>
      </div>
    </div>
  );
};

export default Item;
