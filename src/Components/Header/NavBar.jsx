import React, { useState } from "react";
import s from "./NavBar.module.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Головна");

  const links = [
    { name: "Головна", path: "#home" },
    { name: "Каталог", path: "#catalogue" },
    { name: "Про нас", path: "#aboutUs" },
    { name: "Як замовити", path: "#order" },
    { name: "Відгуки", path: "#clients" },
    { name: "Контакти", path: "#footer" },
  ];

  return (
    <nav className={s.headNav}>
      <ul className={s.navList}>
        {links.map((link) => (
          <li key={link.name} className={s.navItem}>
            <a
              href={link.path}
              className={`navLink ${activeLink === link.name ? "active" : ""}`}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
