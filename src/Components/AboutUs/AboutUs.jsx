import React from "react";
import s from "./AboutUs.module.css";
import Container from "../Container/Container.jsx";

const AboutUs = () => {
  return (
    <section className={s.aboutUs} id="aboutUs">
      <Container>
        {/* <div className={s.aboutTitleWrap}>
          <h2 className={s.aboutTitle}>Каталог</h2>
          <img className={s.border} width="490" src={border}></img>
        </div> */}
        <h2 className={s.aboutTitle}></h2>
        <ul className={s.aboutList}>
          <li className={s.aboutItem}>
            <h3 className={s.aboutSub}></h3>
            <img src="" alt="" className={s.aboutImg} />
            <p className="aboutText"></p>
          </li>
          <li className={s.aboutItem}>
            <h3 className={s.aboutSub}></h3>
            <img src="" alt="" className={s.aboutImg} />
            <p className="aboutText"></p>
          </li>
          <li className={s.aboutItem}>
            <h3 className={s.aboutSub}></h3>
            <img src="" alt="" className={s.aboutImg} />
            <p className="aboutText"></p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default AboutUs;
