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

const images = [
  "https://i.ibb.co/n8dgy4d/img1.webp",
  "https://i.ibb.co/fq63wTm/img2.webp",
  "https://i.ibb.co/HYyFSrt/img3.webp",
  "https://i.ibb.co/PhSBrGn/img4.webp",
  "https://i.ibb.co/S0Xxh8b/img5.webp",
  "https://i.ibb.co/PQ4CQf8/img6.webp",
  "https://i.ibb.co/4V75Q75/img7.webp",
  "https://i.ibb.co/DzZKS4X/img8.webp",
  "https://i.ibb.co/239Jsfk/img9.webp",
  "https://i.ibb.co/m0jN2Wr/img10.webp",
  "https://i.ibb.co/ym923Z5/img11.webp",
  "https://i.ibb.co/MnTHXSz/img12.webp",
  "https://i.ibb.co/30hxY9v/img13.webp",
  "https://i.ibb.co/YfyPJP0/img14.webp",
  "https://i.ibb.co/Vxy2sgG/img15.webp",
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
        className="swiper-container"
      >
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <img className="image" src={image} alt="slide_image" />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
