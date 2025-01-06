import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import s from "./ClientsMob.module.css";

import { EffectCoverflow } from "swiper/modules";

import client_1 from "../../img/Client/client_1.jpg";
import client_1_2x from "../../img/Client/client_1_2x.jpg";
import client_2 from "../../img/Client/client_2.jpg";
import client_2_2x from "../../img/Client/client_2_2x.jpg";
import client_3 from "../../img/Client/client_3.jpg";
import client_3_2x from "../../img/Client/client_3_2x.jpg";

const ClientsMob = () => {
  const slides = [
    {
      id: 1,
      img1x: client_1,
      img2x: client_1_2x,
      alt: "Client 1",
    },
    {
      id: 2,
      img1x: client_2,
      img2x: client_2_2x,
      alt: "Client 2",
    },
    {
      id: 3,
      img1x: client_3,
      img2x: client_3_2x,
      alt: "Client 3",
    },
  ];

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 0,
        stretch: -80,
        depth: 20,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className={s.productSwiper}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.img1x}
            srcSet={`${slide.img1x} 1x, ${slide.img2x} 2x`}
            alt={slide.alt}
            className={s.slideImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientsMob;

//   <Swiper
//       effect="coverflow"
//       grabCursor={true}
//       centeredSlides={true}
//       slidesPerView={1}
//       coverflowEffect={{
//         rotate: 0,
//         stretch: -80,
//         depth: 20,
//         modifier: 1,
//         slideShadows: false,
//       }}
//       modules={[EffectCoverflow]}
//       className={s.productSwiper}
//     ></Swiper>
