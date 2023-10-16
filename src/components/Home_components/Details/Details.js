import React from "react";
import phone3 from "../../assets/phones/phone3.png";
import phone4 from "../../assets/phones/phone4.png";
import Download from "../Download/Download";
import style from "./Details.module.scss";

const Details = () => {
  return (
    <div className={style.container}>
      <div className={style.details}>
        <div className={style.photos}>
          <img src={phone4} alt="phone" className={style.photo1}></img>
          <img src={phone3} alt="phone" className={style.photo2}></img>
        </div>
        <div className={style.text}>
          <h2>Яку користь це дає?</h2>
          <p>
            Застосунок розроблено для матерів, що працюють, яким потрібен догляд
            за їх дітьми дешево, безпечно та законно.
          </p>
          <p>
            Розв’язання проблеми догляду за дітьми на базі нашого застосунку
            дасть змогу мамам піти на роботу та заробити грошей на проживання
            сім’ї в ці складні часи.
          </p>
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Details;
