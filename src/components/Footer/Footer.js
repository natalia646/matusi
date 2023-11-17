import React from "react";
import style from "./Footer.module.scss";
import baza from "../assets/logo/baza-logo.svg";
import { Link } from "react-router-dom";
import facebook from "../assets/logo/facebook.svg";
import instagram from "../assets/logo/instagram.svg";
import linkedin from "../assets/logo/linkedin.svg";

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
const networks = [
  {
    network: "facebook",
    link: "https://www.facebook.com/profile.php?id=61553049146070",
    icon: facebook,
  },
  {
    network: "instagram",
    link: "https://www.instagram.com/mama.ne.vdoma/",
    icon: instagram,
  },
  {
    network: "linkedin",
    link: "https://www.linkedin.com/in/mama-ne-vdoma-mobileapp-1a3485299/",
    icon: linkedin,
  },
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.links}>
          <Link to="https://baza-trainee.tech/ua" target="_blank">
            <img src={baza} alt="Baza Trainee"></img>
          </Link>
          <div className={style.desc}>
            <nav className={style.about}>
              <h3> Про нас</h3>
              {about.map((item, i) => (
                <Link key={i} className={style.contact} to={item.link}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav className={style.contacts}>
              <h3>Контакти</h3>
              <Link className={style.contact} to="/contact">
                app.mama.ne.vdoma@gmail.com
              </Link>

              <div className={style.networks}>
                {networks.map((item, i) => (
                  <Link key={i} to={item.link} target="_blank">
                    <img
                      src={item.icon}
                      alt={item.network}
                      className={style.network_icon}
                    ></img>
                  </Link>
                ))}
              </div>
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
