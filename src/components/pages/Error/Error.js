import React from "react";
import error from "../../assets/pages/error.svg";
import style from "./Error.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className={style.error}>
      <img src={error} alt="error"></img>

      <Link to="/">
        <button className={style.bt_desctop}>Головна</button>
      </Link>

      <div className={style.mobile}>
          <h2> Уупс!</h2>
          <h2> Сторінку не знайдено.</h2>
          <Link to="/">
            <button className={style.bt_mobile}>Головна</button>
          </Link>
        <div className={style.fix}></div>
      </div>
    </main>
  );
};

export default Error;
