import React from "react";
import phone3 from "../assets/phone3.png";
import Download from "../ButtonDownload/Download";
import style from "./Details.module.scss";

const Details = () => {
  return (
  <div className={style.container}>
        <div className={style.details}>
          <img src={phone3} alt="phone"></img>
          <div className={style.text}>
            <h2>Яку користь це дає?</h2>
            <p>
              Додаток розроблено для працюючих матерів, яким потрібен догляд за їх
              дітьми дешево, безпечно та законно.{" "}
            </p>
            <p>
              Вирішення  проблеми догляду за дітьми на базі нашого додатку дасть
              змогу мамам піти на роботу та заробити грошей на проживання сім’ї в ці
              складні часи.
            </p>
    
            <Download />
          </div>
        </div>
  </div>
  );
};

export default Details;
