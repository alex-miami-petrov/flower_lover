import React from "react";
import Container from "../Container/Container";
import border from "../../img/Catalogue/border.png";
import s from "./Catalogue.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Catalogue = () => {
  const options1 = ["< 200 ₴ ", "200 - 500 ₴", "> 1000 ₴"];
  const options2 = ["Чекбокс 2.1", "Чекбокс 2.2"];
  const options3 = ["Чекбокс 3.1", "Чекбокс 3.2"];
  const options4 = ["Чекбокс 4.1", "Чекбокс 4.2"];
  const options5 = ["Чекбокс 5.1", "Чекбокс 5.2"];
  return (
    <div className={s.catalogue} id="catalogue">
      <Container>
        <div className={s.catTitleWrap}>
          <h2 className={s.catTitle}>Каталог</h2>
          <img className={s.border} width="390" src={border}></img>
        </div>

        <div className={`${s.container} ${s.mt5}`}>
          <div className={s.row}>
            <h3 className={s.catSubtitle}>Доставка квітів в Києві</h3>
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
      </Container>
    </div>
  );
};

export default Catalogue;
