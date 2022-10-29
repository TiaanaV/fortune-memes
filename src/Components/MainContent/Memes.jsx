import React from "react";
import startImg from "./../../assets/images/start.png";
import style from "./MainContent.module.css";

const Memes = () => {
  return (
    <section>
      <div className={style.mem}>
        <img src={startImg} width={"250px"} />
      </div>
    </section>
  );
};

export default Memes;
