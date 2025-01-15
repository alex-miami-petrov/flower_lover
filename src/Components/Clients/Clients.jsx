import React from "react";
import s from "./Clients.module.css";
import Container from "../Container/Container.jsx";
import border from "../../img/Clients/client_border.jpg";

import ClientsMob from "./ClientsMob.jsx";

const Clients = () => {
  return (
    <section className={s.clients} id="clients">
      <Container>
        <div className={s.clientTitleWrap}>
          <h2 className={s.clientTitle}>Наші клієнти</h2>
          <img className={s.border} width="494" src={border} alt="border" />
        </div>
      </Container>
      <ClientsMob />
    </section>
  );
};

export default Clients;
