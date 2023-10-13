import React, { useState } from "react";
import Slide from "./Slide";
import style from "../../scss/Slider.module.scss";
import back from "../assets/corousal/back.svg";
import next from "../assets/corousal/next.svg";
import image1 from "../assets/corousal/images/5.png";
import image2 from "../assets/corousal/images/8.png";
import image3 from "../assets/corousal/images/10.png";
import image4 from "../assets/corousal/images/11.png";
import image5 from "../assets/corousal/images/12.png";

const images = [image1, image2, image3]//, image4, image5];

const Slider = () => {
  // const [slideId, setSlideId] = useState(2)

  return (
    <div className={style.container}>

      <div className={` ${style.slide}`}>
        <img src={back} alt="arrow" className={style.arrow}></img>
        <ul>
          {images.map((image, i) => (
            <li>
              <Slide key={i} image={image} i={i} />
            </li>
          ))}
        </ul>
        <img src={next} alt="arrow" className={style.arrow}></img>
      </div>
    </div>
  );
};

export default Slider;
