import React from "react";
import error from "../../assets/pages/error.svg";
import style from "./Error.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={style.error}>
      <img src={error} alt="error"></img>

      <Link to="/">
        <button className={style.bt_desctop}>Головна</button>
      </Link>
    </div>
  );
};

export default Error;
