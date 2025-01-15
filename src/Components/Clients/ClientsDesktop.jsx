import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";

import s from "./ClientsDesktop.module.css";
import { Navigation } from "swiper/modules";

import client_1 from "../../img/Clients/client_1.jpg";
import client_1_2x from "../../img/Clients/client_1_2x.jpg";
import client_2 from "../../img/Clients/client_2.jpg";
import client_2_2x from "../../img/Clients/client_2_2x.jpg";
import client_3 from "../../img/Clients/client_3.jpg";
import client_3_2x from "../../img/Clients/client_3_2x.jpg";
import client_4 from "../../img/Clients/client_4.jpg";
import client_4_2x from "../../img/Clients/client_4_2x.jpg";

const ClientsDesktop = () => {
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
    {
      id: 4,
      img1x: client_4,
      img2x: client_4_2x,
      alt: "Client 4",
    },
    {
      id: 5,
      img1x: client_4,
      img2x: client_4_2x,
      alt: "Client 5",
    },
  ];

  return (
    <Swiper
      navigation={true}
      // centeredSlides={true}
      slidesPerView={4}
      spaceBetween={0}
      modules={[Navigation]}
      className={s.clientDeskSwiper}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={s.clientDeskSlide}>
          <img
            src={slide.img1x}
            srcSet={`${slide.img1x} 1x, ${slide.img2x} 2x`}
            alt={slide.alt}
            className={s.clientDeskSlideImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientsDesktop;
