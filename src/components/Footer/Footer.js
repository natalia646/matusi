import React from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.first_block}>
        <div className={style.desc}>
          Уся інформація в нашому мобільному додатку надається добросовісно,
          однак ми не робимо жодних заяв або гарантій будь-якого роду, явних або
          неявних, щодо точності, адекватності, дійсності, реальності,
          доступності або компетентності будь-якої інформації в мобільному
          додатку. За жодних обставин ми не несемо жодної відповідальності перед
          вами за будь-які збитки чи шкоду будь-якого роду, понесені в
          результаті використання мобільного додатку або довіри до будь-якої
          інформації, наданої в мобільному додатку. Ви використовуєте мобільний
          додаток і будь-яку інформацію в цьому мобільному додатку виключно на
          свій страх і ризик.
        </div>

        <div className={style.second_block}>
          <div>
            <h3> Про нас</h3>
            <p> Про додаток</p>
            <p> Умови користування</p>
          </div>
          <div>
            <h3>Контакти</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className={style.third_block}>
        <p>@2023 Baza Nrainee. Всі права захищені</p>
        <Link to='/privacy'>Політика конфіденційності</Link>
      </div>
    </footer>
  );
};

export default Footer;
