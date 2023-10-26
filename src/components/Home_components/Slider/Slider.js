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


const images = [
  image1,
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
];

const Slider = () => {
  return (
    <div className="container">
      <h2>Інтерфейс застосунку</h2>
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
              <img className="phone-scroll"  src={image} alt="slide_image"/>
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
