import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  FreeMode,
} from "swiper/modules";

import image1 from "../../assets/corousal/images/img1.png";
import image2 from "../../assets/corousal/images/img2.png";
import image3 from "../../assets/corousal/images/img3.png";
import image4 from "../../assets/corousal/images/img4.png";
import image5 from "../../assets/corousal/images/img5.png";
import image6 from "../../assets/corousal/images/img6.png";
import image7 from "../../assets/corousal/images/img7.png";
import image8 from "../../assets/corousal/images/img8.png";


const images = [
  image1,
  image2,
  image3,
  image4,
  image6,
  image8,
  image7,
  image5,
];

const Slider = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        freeMode={{ enabled: true, momentum: true, minimumVelocity: 0.05 }}
        modules={[EffectCoverflow, Pagination, Navigation, FreeMode]}
        className="swiper-container">
          
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={image} alt="slide_image"/>
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
