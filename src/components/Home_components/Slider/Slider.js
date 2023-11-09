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
import axios from "axios";

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

// const images = [
//   "https://i.ibb.co/JxpvvqF/img15.png",
//   "https://i.ibb.co/mNN5qfY/img14.png",
//   "https://i.ibb.co/9s1yPSG/img13.png",
//   "https://i.ibb.co/NycbzSj/img12.png",
//   "https://i.ibb.co/f1rmwQ6/img11.png",
//   "https://i.ibb.co/VNmhMwg/img10.png",
//   "https://i.ibb.co/fC2trfK/img9.png",
//   "https://i.ibb.co/qpWkRH3/img8.png",
//   "https://i.ibb.co/n0c2fqX/img7.png",
//   "https://i.ibb.co/s3RGz90/img6.png",
//   "https://i.ibb.co/tB0hk5b/img5.png",
//   "https://i.ibb.co/PjW8wG1/img4.png",
//   "https://i.ibb.co/8NjrtRz/img3.png",
//   "https://i.ibb.co/RjrpBL4/img2.png",
//   "https://i.ibb.co/QJV9RHG/img1.png",
// ];


const Slider = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    axios
      .get("https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/posts")
      .then(({ data }) => setImages(data))
      .catch((error) => console.log(error))
      .finally(setIsLoading(true));
  }, []);

  if (!isLoading) {
    return <div>Загрузка...</div>;
  }
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
        {images.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <img className="image" src={image.imageUrl} alt="slide_image" />
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
