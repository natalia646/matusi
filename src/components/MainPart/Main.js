import React from "react";
import phone1 from '../assets/phones/phone1.png'
import phone2 from '../assets/phones/phone2.png'
import style from './Main.module.scss'
import Download from "../ButtonDownload/Download";

const Head = () => {
  return (
    <div className={style.head_container}>
      <div className={style.desc}>
        <h4>Долучайся до спільноти</h4>
        <h1>
          Отримай можливість <br/>працювати, в той час, як <span style={{color:'#2000C1'}}> <br/>діти щасливі та у безпеці!</span>
        </h1>
        <p>
          Ми допоможемо тобі знайти поруч мам, з якими можна разом доглядати за
          вашими дітьми. Об’єднайте дітей у дитячі групи та доглядайте за ними
          по черзі у вільний час.
        </p>
        <div className={style.buttons}>
          <Download/>
          <button className={style.more}>Дивитися більше</button>
        </div>
      </div>
      <div className={style.images}>
        <img className={style.phone1} src={phone1} alt="phone"></img>
        <img className={style.phone2} src={phone2} alt ='phone'></img>
      </div>
    </div>
  );
};

export default Head;
