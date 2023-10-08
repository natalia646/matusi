import React from "react";
import style from "../scss/Footer.module.scss";
import { Link } from "react-router-dom";
import baza from "./assets/baza-logo.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.links}>
          <Link to="https://baza-trainee.tech/ua"><img src={baza} alt="Baza Trainee"></img></Link>
          <div className={style.desc}>
            <div className={style.about}>
              <h3> Про нас</h3>
              <Link className={style.contact} to="/terms">
                Умови користування
              </Link>
              <Link className={style.contact} to="/refusal">
                Відмова від відповідальності
              </Link>
              <Link className={style.contact} to="/privacy">
                Політика конфіденційності
              </Link>
            </div>
            <nav className={style.contacts}>
              <h3>Контакти</h3>
              <Link className={style.contact} to="https://baza-trainee.tech/ua">
                Baza Trainee
              </Link>
              <Link className={style.contact} to="">
                Gmail
              </Link>
              <Link
                className={style.contact}
                to="https://www.linkedin.com/company/baza-trainee-ukraine/"
              >
                Linkedin
              </Link>
            </nav>
          </div>
        </div>
        <hr />
        <div className={style.terms}>
          <p>Розробка Baza Trainee Ukraine © 2023 Всі права захищені</p>
          <Link className={style.contact} to="/privacy">
            Політика конфіденційності
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
