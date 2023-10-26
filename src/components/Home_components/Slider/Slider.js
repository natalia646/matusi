import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import image1 from "../../assets/slides/img1.png";
import image2 from "../../assets/slides/img2.png";
import image3 from "../../assets/slides/img3.png";
import image4 from "../../assets/slides/img4.png";
import image5 from "../../assets/slides/img5.png";
import image6 from "../../assets/slides/img6.png";
import image7 from "../../assets/slides/img7.png";
import image8 from "../../assets/slides/img8.png";
import image9 from "../../assets/slides/img9.png";
import image10 from "../../assets/slides/img10.png";
import image11 from "../../assets/slides/img11.png";
import image12 from "../../assets/slides/img12.png";
import image13 from "../../assets/slides/img13.png";
import image14 from "../../assets/slides/img14.png";
import image15 from "../../assets/slides/img15.png";

import left from "../../assets/icons/arrow-left.svg";
import right from "../../assets/icons/arrow-right.svg";

const images = [
  image13,
  image4,
  image15,
  image2,
  image3,
  image6,
  image7,
  image9,
  image10,
  image11,
  image12,
  image5,
  image14,
  image8,
  image1,
];

const Slider = () => {
  return (
    <div className="container">
      <h2>Інтерфейс застосунку</h2>
      <Swiper
        effect={"coverflow"}
        className="swiper-container"
        loop={true}
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        freeMode={{ enabled: true, momentum: true, minimumVelocity: 0.05 }}
        modules={[EffectCoverflow, Pagination, Navigation, FreeMode]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
      >
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <img className="image" src={image} alt="slide_image" />
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
            {/* <img className="arrow  arrow-right" src={right} alt="right"></img> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
            {/* <img className="arrow  arrow-left" src={left} alt="left"></img> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
