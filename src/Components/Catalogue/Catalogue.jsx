import React from "react";
import Container from "../Container/Container";
import border from "../../img/Catalogue/border.png";
import s from "./Catalogue.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
// import HitsCard from "../HitsCard/hitsCard.jsx";

const Catalogue = () => {
  const options1 = ["< 200 ₴ ", "200 - 500 ₴", "> 1000 ₴"];
  const options2 = [
    "Троянда",
    "Еустома",
    "Хризантема",
    "Лілія",
    "Тюльпан",
    "Гортензія",
    "Альстромерія",
  ];
  const options3 = ["Жінці", "Чоловіку"];
  const options4 = ["День народження", "Весілля", "Кохання", "Співчуваю"];
  const options5 = [
    "Вільний",
    "Каркасний",
    "В коробці",
    "В кошику",
    "Каскадний",
  ];
  return (
    <div className={s.catalogue} id="catalogue">
      <Container>
        <div className={s.catTitleWrap}>
          <h2 className={s.catTitle}>Каталог</h2>
          <img className={s.border} width="490" src={border}></img>
        </div>

        <div className={`${s.dropContainer} ${s.mt5}`}>
          <div className={s.row}>
            <h3 className={s.catSubtitle}>Доставка квітів в Києві</h3>
            <div className={s.dropMenuWrap}>
              <DropdownMenu
                title="Ціна ..."
                options={options1}
                className={s.dropBtn}
                isOpenDefault={true}
              />
              <DropdownMenu
                title="Квіти ..."
                options={options2}
                className={s.dropBtn}
                isOpenDefault={false}
              />
              <DropdownMenu
                title="Кому ..."
                options={options3}
                className={s.dropBtn}
                isOpenDefault={false}
              />
              <DropdownMenu
                title="Привід..."
                options={options4}
                className={s.dropBtn}
                isOpenDefault={false}
              />
              <DropdownMenu
                title="Стиль ..."
                options={options5}
                className={s.dropBtn}
                isOpenDefault={false}
              />
            </div>
          </div>
        </div>
        {/* <HitsCard productId="6739e2e8d59b5794b7fb58b5" /> */}
      </Container>
    </div>
  );
};

export default Catalogue;
