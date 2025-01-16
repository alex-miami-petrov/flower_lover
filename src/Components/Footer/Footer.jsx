import React from "react";
import s from "./Footer.module.css";
import Container from "../Container/Container.jsx";
import logo from "../../img/logo/logo.png";
import icons from "../../img/icons.svg";

const Footer = () => {
  const links = [
    { name: "Головна", path: "/" },
    { name: "Каталог", path: "#catalogue" },
    { name: "Про нас", path: "#aboutUs" },
    { name: "Як замовити", path: "#order" },
    { name: "Відгуки", path: "#clients" },
    { name: "Контакти", path: "#footer" },
  ];
  const phoneNumber = "+380977775577";
  return (
    <section className={s.footer} id="footer">
      <Container>
        <div className={s.footWrap}>
          <div className={s.navWrap}>
            <ul className={s.navList}>
              {links.map((link) => (
                <li key={link.name} className={s.navItem}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.contactsWrap}>
            <ul className={s.contactsList}>
              <li className={s.contactsItem}>
                <h3 className={s.subTitle}></h3>
                <p className={s.text}></p>
              </li>
              <li className={s.contactsItem}>
                <h3 className={s.subTitle}></h3>
                <p className={s.text}></p>
              </li>
              <li className={s.contactsItem}>
                <h3 className={s.subTitle}></h3>
                <p className={s.text}></p>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.botWrap}>
          <a href="/" className={s.logoLink}>
            <img
              src={logo}
              alt="logo"
              className={s.headLogo}
              width="126"
              height="63"
            />
          </a>
          <div className={s.socialWrap}>
            <ul className={s.socialList}>
              <li className={s.socialItem}>
                <a href={`tel:${phoneNumber}`} className={s.socialLink}>
                  <svg
                    className={`${s.socialIcon} ${s.phone}`}
                    width="24"
                    height="25"
                  >
                    <use href={`${icons}#icon-phone-1`} />
                  </svg>
                </a>
              </li>
              <li className={s.socialItem}>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.socialLink}
                >
                  <svg className={s.socialIcon} width="24" height="25">
                    <use href={`${icons}#icon-insta`} />
                  </svg>
                </a>
              </li>
              <li className={s.socialItem}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.socialLink}
                >
                  <svg className={s.socialIcon} width="24" height="25">
                    <use href={`${icons}#icon-fb`} />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
