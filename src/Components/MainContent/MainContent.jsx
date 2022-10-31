import React from "react";
import ButtonArea from "./ButtonArea";
import Memes from "./Memes";
import Promo from "./Promo";
import style from "./MainContent.module.css";

const MainContent = () => {
  return (
    <main className={style.mainContent}>
      <Memes />
      {/* <ButtonArea /> */}
      <Promo />
    </main>
  );
};

export default MainContent;
