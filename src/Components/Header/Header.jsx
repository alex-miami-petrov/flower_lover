import React from "react";
import Container from "../Container/Container";
import logo from "../../img/logo/logo.png";
import icons from "../../img/icons.svg";
import s from "./Header.module.css";
import NavBar from "./NavBar";

const Header = ({ toggleMenu }) => {
  return (
    <section className={s.header}>
      <Container>
        <div className={s.headWrap}>
          <a href="/" className={s.logoLink}>
            <img
              src={logo}
              alt="logo"
              className={s.headLogo}
              width="126"
              height="63"
            />
          </a>

          <NavBar />
          <div className={s.headBtnWrap}>
            <button type="button" className={s.headSearchButton}>
              <svg className={s.headSearchIcon} width="22" height="23">
                <use href={`${icons}#icon-search`} />
              </svg>
            </button>

            <button type="button" className={s.burger} onClick={toggleMenu}>
              <svg className={s.burgerIcon} width="42" height="42">
                <use href={`${icons}#icon-burger`} />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
