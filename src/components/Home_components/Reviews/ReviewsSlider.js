import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Reviews.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  FreeMode,
} from "swiper/modules";

import Review from "./Review";
import person1 from "../../assets/persone/person1.svg";
import person2 from "../../assets/persone/person2.svg";
import person3 from "../../assets/persone/person3.svg";
import person4 from "../../assets/persone/person4.svg";
import person5 from "../../assets/persone/person5.svg";
import person6 from "../../assets/persone/person6.svg";

const people = [
  person3,
  person2,
  person4,
  person5,
  person6,
  person1,
];

const Slider = () => {
  return (
    <div className="container-reviews-mobile">
      <h2>Відгуки користувачів</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
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
        className="swiper-container"
      >
        {people.map((persone, i) => {
          return (
            <SwiperSlide key={i}>
              <Review item={persone} i={i} />;
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
