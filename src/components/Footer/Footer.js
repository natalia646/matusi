import React from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
import baza from "../assets/logo/baza-logo.svg";

const about = [
  {
    link: "/terms",
    label: "Умови користування",
  },
  {
    link: "/refusal",
    label: "Відмова від відповідальності",
  },
  {
    link: "/privacy",
    label: "Політика конфіденційності",
  },
];
const contacts = [
  {
    link: "https://baza-trainee.tech/ua",
    label: "Baza Trainee",
  },
  {
    link: "",
    label: "Gmail",
  },
  {
    link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
    label: "Linkedin",
  },
];


const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.links}>
          <Link to="https://baza-trainee.tech/ua">
            <img src={baza} alt="Baza Trainee"></img>
          </Link>
          <div className={style.desc}>
            <div className={style.about}>
              <h3> Про нас</h3>
             {about.map((item, i) =><Link key={i} className={style.contact} to = {item.link}>{item.label}</Link>)}
            </div>
            <nav className={style.contacts}>
              <h3>Контакти</h3>
             {contacts.map((item, i) =><Link key={i} className={style.contact} to = {item.link}>{item.label}</Link>)}
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
