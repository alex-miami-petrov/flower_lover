// import React from "react";
// import Container from "../Container/Container.jsx";
// import s from "./Order.module.css";
// import border from "../../img/Catalogue/border.png";
// import icons from "../../img/icons.svg";
// import OrderForm from "../OrderForm/OrderForm.js";

// const Order = () => {
//   return (
//     <section className={s.order} id="order">
//       <Container>
//         <div className={s.orderTitleWrap}>
//           <h2 className={s.orderTitle}>
//             Не можете визначитись з вибором букету?
//           </h2>
//           <img className={s.border} width="350" src={border} alt="border" />
//         </div>
//         <h3 className={s.orderSub}>
//           <span className={s.orderSpan}>Відправте заявку</span>
//           <br /> і Вам зателефонують
//           <br /> протягом однієї хвилини
//         </h3>

//         <div className={s.managerInfo}>
//           <h4>Наш менеджер по телефону:</h4>
//           <ul className={s.managerList}>
//             <li>
//               <svg className={s.checkIcon} width="27" height="20">
//                 <use href={`${icons}#icon-check`} />
//               </svg>
//               Відповість на будь-які запитання
//             </li>
//             <li>
//               <svg className={s.checkIcon} width="27" height="20">
//                 <use href={`${icons}#icon-check`} />
//               </svg>
//               Підбере рішення відповідно до ваших запитів та бажань
//             </li>
//             <li>
//               <svg className={s.checkIcon} width="27" height="20">
//                 <use href={`${icons}#icon-check`} />
//               </svg>
//               Підготує унікальну пропозицію
//             </li>
//             <li>
//               <svg className={s.checkIcon} width="27" height="20">
//                 <use href={`${icons}#icon-check`} />
//               </svg>
//               Оформить для Вас подарунок-сюрприз
//             </li>
//           </ul>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Order;

import React from "react";
import Container from "../Container/Container.jsx";
import s from "./Order.module.css";
import border from "../../img/Catalogue/border.png";
import icons from "../../img/icons.svg";
import OrderForm from "../OrderForm/OrderForm.jsx";

const Order = () => {
  return (
    <section className={s.order} id="order">
      <Container>
        <div className={s.orderTitleWrap}>
          <h2 className={s.orderTitle}>
            Не можете визначитись з вибором букету?
          </h2>
          <img className={s.border} width="350" src={border} alt="border" />
        </div>
        <h3 className={s.orderSub}>
          <span className={s.orderSpan}>Відправте заявку</span>
          <br /> і Вам зателефонують
          <br /> протягом однієї хвилини
        </h3>
        <OrderForm />
        <div className={s.managerInfo}>
          <h4 className={s.orderLowSub}>Наш менеджер по телефону:</h4>
          <ul className={s.managerList}>
            <li>
              <div className={s.listWrap}>
                <svg className={s.checkIcon} width="27" height="20">
                  <use href={`${icons}#icon-check`} />
                </svg>
                <p className={s.listText}>
                  <span className={s.listSpan}>Відповість</span> на будь-які
                  запитання
                </p>
              </div>
            </li>
            <li>
              <div className={s.listWrap}>
                <svg className={s.checkIcon} width="27" height="20">
                  <use href={`${icons}#icon-check`} />
                </svg>
                <p className={s.listText}>
                  <span className={s.listSpan}>Підбере рішення</span> відповідно
                  до ваших запитів та бажань
                </p>
              </div>
            </li>
            <li>
              <div className={s.listWrap}>
                <svg className={s.checkIcon} width="27" height="20">
                  <use href={`${icons}#icon-check`} />
                </svg>
                <p className={s.listText}>
                  <span className={s.listSpan}>
                    Підготує унікальну пропозицію
                  </span>
                  та детально розповість Вам про наші букети
                </p>
              </div>
            </li>
            <li>
              <div className={s.listWrap}>
                <svg className={s.checkIcon} width="27" height="20">
                  <use href={`${icons}#icon-check`} />
                </svg>
                <p className={s.listText}>
                  <span className={s.listSpan}>Оформить</span> для Вас
                  подарунок-сюрприз
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Order;
