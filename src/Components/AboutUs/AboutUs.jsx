import React from "react";
import s from "./AboutUs.module.css";
import border from "../../img/Catalogue/border.png";
import about1 from "../../img/AboutUs/about-1.png";
import about1_2x from "../../img/AboutUs/about-1-2x.png";
import about1_desk from "../../img/AboutUs/about-1-desk.png";
import about1_desk_2x from "../../img/AboutUs/about-1-desk-2x.png";
import about2 from "../../img/AboutUs/about-2.png";
import about2_2x from "../../img/AboutUs/about-2-2x.png";
import about2_desk from "../../img/AboutUs/about-2-desk.png";
import about2_desk_2x from "../../img/AboutUs/about-2-desk-2x.png";
import about3 from "../../img/AboutUs/about-3.png";
import about3_2x from "../../img/AboutUs/about-3-2x.png";
import about3_desk from "../../img/AboutUs/about-3-desk.png";
import about3_desk_2x from "../../img/AboutUs/about-3-desk-2x.png";
import Container from "../Container/Container.jsx";

const AboutUs = () => {
  return (
    <section className={s.aboutUs} id="aboutUs">
      <Container>
        <div className={s.aboutTitleWrap}>
          <h2 className={s.aboutTitle}>Якість в деталях</h2>
          <img className={s.border} width="350" src={border} alt="Border" />
        </div>

        <ul className={s.aboutList}>
          <li className={s.aboutItem}>
            <picture>
              <source
                srcSet={`${about1_desk} 1x, ${about1_desk_2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${about1} 1x, ${about1_2x} 2x`}
                media="(min-width: 390px)"
              />
              <img
                src={about1}
                alt="flower"
                className={s.aboutImg}
                width="342"
                height="200"
              />
            </picture>
            <h3 className={s.aboutSub}>Контроль свіжості квітів</h3>
            <p className={s.aboutText}>
              Ми співпрацюємо з кращими постачальниками квітів і готові
              запропонувати{" "}
              <span className={s.aboutSpan}>Вам широкий асортимент квітів</span>
              , починаючи від місцевих сортів і закінчуючи рідкісними
              імпортованими варіантами. <br />
              <br />
              Ваша близька людина отримає найкращий подарунок, адже ми ретельно
              підбираємо кожну квітку для вашого букету.
            </p>
          </li>
          <li className={s.aboutItem}>
            <picture>
              <source
                srcSet={`${about2_desk} 1x, ${about2_desk_2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${about2} 1x, ${about2_2x} 2x`}
                media="(min-width: 390px)"
              />
              <img
                src={about2}
                alt="flowers"
                className={s.aboutImg}
                width="342"
                height="200"
              />
            </picture>
            <h3 className={s.aboutSub}>Оформлення букетів</h3>
            <p className={s.aboutText}>
              Ми готові зібрати
              <span className={s.aboutSpan}>
                Унікальний Букет По Індивідуальному Замовленню
              </span>
              . Наші флористи втілять в життя будь яку Вашу ідею!
            </p>
          </li>
          <li className={s.aboutItem}>
            <picture>
              <source
                srcSet={`${about3_desk} 1x, ${about3_desk_2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${about3} 1x, ${about3_2x} 2x`}
                media="(min-width: 390px)"
              />
              <img
                src={about3}
                alt="bouquet"
                className={s.aboutImg}
                width="342"
                height="200"
              />
            </picture>
            <h3 className={s.aboutSub}>Швидка доставка</h3>
            <p className={s.aboutText}>
              Ми робимо доставки по Україні протягом{" "}
              <span className={s.aboutSpan}>3-х годин</span> з моменту оплати
              замовлення.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default AboutUs;
