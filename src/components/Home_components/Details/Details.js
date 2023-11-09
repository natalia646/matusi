import React from "react";
import Download from "../Download/Download";
import style from "./Details.module.scss";

const Details = () => {
  return (
    <div className={style.container}>
      <div className={style.details}>
        <span className={style.mobile}>
          <Download />
        </span>
        <div className={style.photos}>
          <img className={style.photo1} src="https://i.ibb.co/z8qY2xb/phone4.png" alt="phone4" border="0"></img>
          <img className={style.photo2} src="https://i.ibb.co/dm1t7LH/phone3.png" alt="phone3" border="0"></img>
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
          <span className={style.desctop}>
            <Download />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
