import React, { useEffect, useState } from "react";
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

// import image1 from "https://ibb.co/b6V1Zvn";
// import image2 from "../../assets/slides/img2.png";
// import image3 from "../../assets/slides/img3.png";
// import image4 from "../../assets/slides/img4.png";
// import image5 from "../../assets/slides/img5.png";
// import image6 from "../../assets/slides/img6.png";
// import image7 from "../../assets/slides/img7.png";
// import image8 from "../../assets/slides/img8.png";
// import image9 from "../../assets/slides/img9.png";
// import image10 from "../../assets/slides/img10.png";
// import image11 from "../../assets/slides/img11.png";
// import image12 from "../../assets/slides/img12.png";
// import image13 from "../../assets/slides/img13.png";
// import image14 from "../../assets/slides/img14.png";
// import image15 from "../../assets/slides/img15.png";

// https://ibb.co/b6V1Zvn
// https://ibb.co/bbwg2pR
// https://ibb.co/mbH9gYv
// https://ibb.co/SympRwV
// https://ibb.co/H7c21Qr
// https://ibb.co/NYCPb28
// https://ibb.co/g7T1wb0
// https://ibb.co/GRtcVZ4
// https://ibb.co/4j7M4zD
// https://ibb.co/thXNYLq
// https://ibb.co/kHqYCMb
// https://ibb.co/QKytGdN
// https://ibb.co/Tm7Pydr
// https://ibb.co/6XX0Pjp
// https://ibb.co/cb866wX


// const images = [
//   image13,
//   image4,
//   image15,
//   image2,
//   image3,
//   image6,
//   image7,
//   image9,
//   image10,
//   image11,
//   image12,
//   image5,
//   image14,
//   image8,
//   image1,
// ];

const Slider = () => {
const [images, setImages] = useState([]);



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
