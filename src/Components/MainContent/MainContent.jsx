import React from "react";
import Memes from "./Memes";
import Promo from "./Promo";
import style from "./MainContent.module.css";

const MainContent = (props) => {
  return (
    <main className={style.mainContent}>
      <Memes memes={props.memes} getRandomMeme={props.getRandomMeme} />
      <Promo />
    </main>
  );
};

export default MainContent;
