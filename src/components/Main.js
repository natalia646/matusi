import React from "react";
import { useDispatch } from "react-redux";
import { setDetails } from "./redux/slices/activeSlice";
import Download from "./Download";
import phone1 from "../components/assets/phones/phone1.png";
import phone2 from "../components/assets/phones/phone2.png";
import google from "../components/assets/icons/google_play.svg";
import style from "../scss/Main.module.scss";

const MainPart = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.head_container}>
      <div className={style.back_mobile}>
        <div className={style.desc}>

          <h4>Долучайся до спільноти</h4>

          <h1>
            Отримай можливість <br />
            працювати, в той час, як
            <span style={{ color: "#2000C1" }}>
              <br />
              діти щасливі та у безпеці!
            </span>
          </h1>
          
          <h5>Долучайся до спільноти</h5>

          <p>
            Ми допоможемо тобі знайти поруч мам, з якими можна разом доглядати
            за вашими дітьми. Об’єднайте дітей у дитячі групи та доглядайте за
            ними по черзі у вільний час.
          </p>
          <div className={style.buttons}>
            <Download />
            <button
              className={style.more}
              onClick={() => dispatch(setDetails(true))}
            >
              Дивитися більше
            </button>
          </div>
        </div>
      </div>

      <div className={style.images}>
        <div className={style.google_play}>
          <img src={google} alt="Google Play"></img>
          <div className={style.text}>
            <p>Get it on</p>
            <p>
              <b>Google Play</b>
            </p>
          </div>
        </div>
        <img className={style.phone1} src={phone1} alt="phone"></img>
        <img className={style.phone2} src={phone2} alt="phone"></img>
      </div>
    </div>
  );
};

export default MainPart;
