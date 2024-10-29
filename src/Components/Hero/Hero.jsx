import React from "react";
import s from "./Hero.module.css";
import rose from "../../img/Hero/rose.png";
import delivery from "../../img/Hero/delivery.png";
import world from "../../img/Hero/world.png";
import Container from "../Container/Container";

export const Hero = () => {
  return (
    <div className={s.hero} id="home">
      <Container>
        <div className={s.heroWrap}>
          <h1 className={s.heroTitle}>
            Неймовірні <br />
            <span className={s.heroSpan}>букети</span> зі свіжих квітів
          </h1>
          <a href="#catalogue" className={s.heroLinkBtn}>
            ЗАМОВИТИ КВІТИ
          </a>
          <div className={s.heroIconsWrap}>
            <div className={s.hIW}>
              <img
                className={s.heroIcon}
                width="24"
                height="24"
                src={rose}
              ></img>
              <p className={s.heroText}>Щоденне оновлення</p>
            </div>
            <div className={s.hIW}>
              <img
                className={s.heroIcon}
                width="24"
                height="24"
                src={delivery}
              ></img>
              <p className={s.heroText}>Безкоштовна доставка</p>
            </div>
            <div className={s.hIW}>
              <img
                className={s.heroIcon}
                width="24"
                height="24"
                src={world}
              ></img>
              <p className={s.heroText}>
                Більше 1000 <br /> сортів квітів{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
