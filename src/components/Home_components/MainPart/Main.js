import React from "react";
import { useDispatch } from "react-redux";
import { setDetails } from "../../redux/slices/activeSlice";
import Download from "../../Home_components/Download/Download";
import google from "../../assets/icons/google_play.svg";
import style from "./Main.module.scss";
import { Link } from "react-router-dom";

const MainPart = () => {
  const dispatch = useDispatch();

  return (

    <div className={style.head_container}>
      <div className={style.back_mobile}>
        <div className={style.desc}>

          <h4>Долучайся до спільноти</h4>

          <h1 className={style.h1}>
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
        <Link className={style.google_play} target="_blank" to="https://play.google.com/store/apps/details?id=tech.baza_trainee.mama_ne_vdoma">
            <img src={google} alt="Google Play"></img>
            <div className={style.text}>
              <p>Get it on</p>
              <></>
              <p>
                <b>Google Play</b>
              </p>
            </div>
        </Link>
        <img className={style.phone1} src="https://i.ibb.co/n8dgy4d/img1.webp" alt="img1" ></img>
        <img className={style.phone2}  src="https://i.ibb.co/rmvsZb1/img01.webp" alt="phone2"></img>
      </div>
    </div>
  );
};

export default MainPart;
