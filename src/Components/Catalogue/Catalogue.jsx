import React from "react";
import Container from "../Container/Container";
import border from "../../img/Catalogue/border.png";
import s from "./Catalogue.module.css";

const Catalogue = () => {
  return (
    <div className={s.catalogue}>
      <Container>
        <div className={s.catTitleWrap}>
          <h2 className={s.catTitle}>Каталог</h2>
          <img className={s.border} width="390" src={border}></img>
        </div>
      </Container>
    </div>
  );
};

export default Catalogue;
