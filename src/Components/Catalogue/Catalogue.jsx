import React from "react";
import Container from "../Container/Container";
import s from "./Catalogue.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Hits from "../Hits/Hits.jsx";
// import { useEffect, useState } from "react";
// import { fetchResults } from "./api";

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

  // const [filters, setFilters] = useState({
  //   price: [],
  //   flowers: [],
  //   recipient: [],
  //   occasion: [],
  //   style: [],
  // });
  // const [results, setResults] = useState([]);
  // const [error, setError] = useState(null);

  // const handleApplyFilter = (filterType, selectedOptions) => {
  //   setFilters((prev) => ({ ...prev, [filterType]: selectedOptions }));
  // };

  // const fetchFilteredResults = async () => {
  //   try {
  //     const data = await fetchResults(filters);
  //     setResults(data);
  //   } catch (error) {
  //     setError("Failed to fetch results");
  //   }
  // };

  // useEffect(() => {
  //   if (
  //     filters.price.length ||
  //     filters.flowers.length ||
  //     filters.recipient.length ||
  //     filters.occasion.length ||
  //     filters.style.length
  //   ) {
  //     fetchFilteredResults();
  //   }
  // }, [filters]);

  return (
    <section className={s.catalogue} id="catalogue">
      <Container>
        <div className={s.catTitleWrap}>
          <h2 className={s.catTitle}>Каталог</h2>
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
                // onApply={(selectedOptions) =>
                //   handleApplyFilter("price", selectedOptions)
                // }
              />
              <DropdownMenu
                title="Квіти ..."
                options={options2}
                className={s.dropBtn}
                isOpenDefault={false}
                // onApply={(selectedOptions) =>
                //   handleApplyFilter("flowers", selectedOptions)
                // }
              />
              <DropdownMenu
                title="Кому ..."
                options={options3}
                className={s.dropBtn}
                isOpenDefault={false}
                // onApply={(selectedOptions) =>
                //   handleApplyFilter("recipient", selectedOptions)
                // }
              />
              <DropdownMenu
                title="Привід..."
                options={options4}
                className={s.dropBtn}
                isOpenDefault={false}
                // onApply={(selectedOptions) =>
                //   handleApplyFilter("occasion", selectedOptions)
                // }
              />
              <DropdownMenu
                title="Стиль ..."
                options={options5}
                className={s.dropBtn}
                isOpenDefault={false}
                // onApply={(selectedOptions) =>
                //   handleApplyFilter("style", selectedOptions)
                // }
              />
            </div>
            {/* <button className={s.fetchButton} onClick={fetchResults}>
              Застосувати фільтри
            </button> */}
          </div>
        </div>
        <Hits />
        {/* results={results} */}
      </Container>
    </section>
  );
};

export default Catalogue;
