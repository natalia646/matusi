import React from "react";
import error from "../../assets/pages/error.svg";
import style from "./Error.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className={style.error}>
      <img src={error} alt="error"></img>
      <Link to="/">
        <button>Головна</button>
      </Link>
    </main>
  );
};

export default Error;
