import React, { useEffect, useState } from "react";
import startImage from "./../../assets/images/start.png";
import style from "./MainContent.module.css";
import MemeItem from "./MemeItem";

const memes = [
  {
    id: 1,
    imageUrl:
      "https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&autoc=format&w=926&fit=clip",
  },
  {
    id: 2,
    imageUrl: "https://static-cse.canva.com/blob/945517/1600w-QZiqeDqC-q4.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/originals/12/ac/a3/12aca3c4e28a267919555df9212f4e32.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://static.mk.ru/upload/entities/2022/04/01/07/articlesImages/image/60/7a/c1/1c/0dce2546b63095398809375ea6e04db5.jpg",
  },
];

const Memes = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isClickButton, switchIsChickButton] = useState(false);
  const [disabledStatus, switchDisabledStatus] = useState(false);

  const changeImage = () => {
    switchIsChickButton(true);
    switchDisabledStatus(true);
    const randomNumber = Math.floor(Math.random() * memes.length);
    setCurrentImageIndex(randomNumber);
  };

  // useEffect(() => changeImage(), []);

  return (
    <section>
      <div className={style.mem}>
        {isClickButton ? (
          <MemeItem imageUrl={memes[currentImageIndex].imageUrl} />
        ) : (
          <img src={startImage} width={"250px"} />
        )}
      </div>
      <button onClick={changeImage} disabled={disabledStatus}>
        Magic
      </button>
    </section>
  );
};

export default Memes;
