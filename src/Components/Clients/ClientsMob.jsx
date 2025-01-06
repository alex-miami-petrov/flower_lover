// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import s from "./ClientsMob.module.css";

// import { EffectCoverflow } from "swiper/modules";

// import client_1 from "../../img/Client/client_1.jpg";
// import client_1_2x from "../../img/Client/client_1_2x.jpg";
// import client_2 from "../../img/Client/client_2.jpg";
// import client_2_2x from "../../img/Client/client_2_2x.jpg";
// import client_3 from "../../img/Client/client_3.jpg";
// import client_3_2x from "../../img/Client/client_3_2x.jpg";
// import client_4 from "../../img/Client/client_4.jpg";
// import client_4_2x from "../../img/Client/client_4_2x.jpg";

// const ClientsMob = () => {
//   const slides = [
//     {
//       id: 1,
//       img1x: client_1,
//       img2x: client_1_2x,
//       alt: "Client 1",
//     },
//     {
//       id: 2,
//       img1x: client_2,
//       img2x: client_2_2x,
//       alt: "Client 2",
//     },
//     {
//       id: 3,
//       img1x: client_3,
//       img2x: client_3_2x,
//       alt: "Client 3",
//     },
//     {
//       id: 4,
//       img1x: client_4,
//       img2x: client_4_2x,
//       alt: "Client 4",
//     },
//   ];

//   return (
//     <Swiper
//       effect="coverflow"
//       grabCursor={true}
//       centeredSlides={true}
//       slidesPerView="auto"
//       spaceBetween={-50}
//       coverflowEffect={{
//         rotate: 0,
//         stretch: -0.8,
//         depth: 20,
//         modifier: 10,
//         slideShadows: false,
//       }}
//       modules={[EffectCoverflow]}
//       className={s.clientSwiper}
//     >
//       {slides.map((slide) => (
//         <SwiperSlide key={slide.id} className={s.clientSlide}>
//           <img
//             src={slide.img1x}
//             srcSet={`${slide.img1x} 1x, ${slide.img2x} 2x`}
//             alt={slide.alt}
//             className={s.clientSlideImage}
//             width="220"
//             height="240"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ClientsMob;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import s from "./ClientsMob.module.css";

import client_1 from "../../img/Client/client_1.jpg";
import client_1_2x from "../../img/Client/client_1_2x.jpg";
import client_2 from "../../img/Client/client_2.jpg";
import client_2_2x from "../../img/Client/client_2_2x.jpg";
import client_3 from "../../img/Client/client_3.jpg";
import client_3_2x from "../../img/Client/client_3_2x.jpg";
import client_4 from "../../img/Client/client_4.jpg";
import client_4_2x from "../../img/Client/client_4_2x.jpg";

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
    {
      id: 4,
      img1x: client_4,
      img2x: client_4_2x,
      alt: "Client 4",
    },
  ];

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={false}
      slidesPerView="auto"
      spaceBetween={-40}
      coverflowEffect={{
        rotate: 0,
        stretch: -0.8,
        depth: 20,
        modifier: 10,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className={s.clientSwiper}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={s.clientSlide}>
          <img
            src={slide.img1x}
            srcSet={`${slide.img1x} 1x, ${slide.img2x} 2x`}
            alt={slide.alt}
            className={s.clientSlideImage}
            width="306"
            height="auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientsMob;
