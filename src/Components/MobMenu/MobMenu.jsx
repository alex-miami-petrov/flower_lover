// import React, { useState } from "react";
// import icons from "../../img/icons.svg";
// import s from "./MobMenu.module.css";

// const MobMenu = ({ closeMenu }) => {
//   const [activeLink, setActiveLink] = useState("Головна");

//   const links = [
//     { name: "Головна", path: "#home" },
//     { name: "Каталог", path: "#catalogue" },
//     { name: "Про нас", path: "#aboutUs" },
//     { name: "Як замовити", path: "#order" },
//     { name: "Відгуки", path: "#clients" },
//     { name: "Контакти", path: "#footer" },
//   ];

//   return (
//     <div className={s.mobNav}>
//       <button type="button" className={s.closeBtn} onClick={closeMenu}>
//         <svg className={s.closeIcon} width="22" height="23">
//           <use href={`${icons}#icon-close`} />
//         </svg>
//       </button>
//       <ul className={s.navList}>
//         {links.map((link) => (
//           <li key={link.name} className={s.navItem}>
//             <a href={link.path} onClick={closeMenu}>
//               {link.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MobMenu;

import React from "react";
import icons from "../../img/icons.svg";
import s from "./MobMenu.module.css";

const MobMenu = ({ closeMenu }) => {
  const links = [
    { name: "Головна", path: "/" },
    { name: "Каталог", path: "#catalogue" },
    { name: "Про нас", path: "#aboutUs" },
    { name: "Як замовити", path: "#order" },
    { name: "Відгуки", path: "#clients" },
    { name: "Контакти", path: "#footer" },
  ];

  return (
    <>
      <div className={s.backdrop} onClick={closeMenu}></div>
      <div className={`${s.mobNav} ${s.active}`}>
        <button type="button" className={s.closeBtn} onClick={closeMenu}>
          <svg className={s.closeIcon} width="22" height="23">
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>
        <ul className={s.navList}>
          {links.map((link) => (
            <li key={link.name} className={s.navItem}>
              <a href={link.path} onClick={closeMenu}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobMenu;
