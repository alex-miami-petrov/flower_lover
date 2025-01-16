import React, { useEffect, useState } from "react";
import s from "./Clients.module.css";
import Container from "../Container/Container.jsx";
import border from "../../img/Clients/client_border.jpg";

import ClientsMob from "./ClientsMob.jsx";
import ClientsDesktop from "./ClientsDesktop.jsx";

const Clients = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={s.clients} id="clients">
      <Container>
        <div className={s.clientTitleWrap}>
          <h2 className={s.clientTitle}>Наші клієнти</h2>
          {/* <img className={s.border} width="494" src={border} alt="border" /> */}
        </div>
      </Container>
      {isDesktop ? <ClientsDesktop /> : <ClientsMob />}
    </section>
  );
};

export default Clients;
