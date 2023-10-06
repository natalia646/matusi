import React from "react";
import style from "../scss/Footer.module.scss";
import { Link } from "react-router-dom";
import baza from './assets/baza-logo.svg'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.first_block}>
        <img className={style.desc} src={baza} alt="Baza Trainee"></img>
        <div className={style.second_block}>
          <div className={style.about}>
            <h3> Про нас</h3>
            <Link className={style.contact} to="/privacy">Про додаток</Link>
            <Link className={style.contact} to="/terms">Умови користування</Link>
          </div>
          <div className={style.contacts}>
            <h3>Контакти</h3>
            <Link className={style.contact} to= 'https://baza-trainee.tech/ua'>Baza Trainee</Link>
            <Link className={style.contact} to= ''>Gmail</Link>
            <Link className={style.contact} to= 'https://www.linkedin.com/company/baza-trainee-ukraine/'>Linkedin</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={style.third_block}>
        <p>@2023 Baza Nrainee. Всі права захищені</p>
        <Link style={{color: '#fff'}} to="/privacy">Політика конфіденційності</Link>
      </div>
    </footer>
  );
};

export default Footer;
