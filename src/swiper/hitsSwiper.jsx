import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import s from "./hitsSwiper.module.css";

import { EffectCoverflow } from "swiper/modules";
import ProductCard from "../Components/ProductCard/productCard.jsx";

const HitsSwiper = ({ products }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      // initialSlide={0}
      centeredSlides={true}
      slidesPerView={"1"}
      coverflowEffect={{
        rotate: 0,
        stretch: -0.8,
        depth: 20,
        modifier: 10,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className={s.productSwiper}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HitsSwiper;