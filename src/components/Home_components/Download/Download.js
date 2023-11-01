import React from "react";
import style from "./Download.module.scss";
import { Link } from "react-router-dom";

export default function Download() {
  return (
    <Link target="_blank" to="https://play.google.com/store/apps/details?id=tech.baza_trainee.mama_ne_vdoma">
      <button className={style.download}>Завантажити</button>
    </Link>
  );
}
