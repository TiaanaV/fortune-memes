import React, { useEffect, useReducer, useState } from "react";
import startImage from "./../../assets/images/start.png";
import style from "./MainContent.module.css";
import MemeItem from "./MemeItem";

const Memes = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [isClickButton, switchChickButton] = useState(false);
  const [disabledStatus, switchDisabledStatus] = useState(false);

  // const [state, dispatch] = useReducer(
  //   state.reducers.memeReducer,
  //   initialState
  // );

  const changeImage = () => {
    switchChickButton(true);
    // switchDisabledStatus(true);
    const randomNumber = Math.floor(Math.random() * props.memes.length);
    setCurrentImageIndex(randomNumber);
    setCurrentImageUrl(props.memes[currentImageIndex].imageUrl);
    props.getRandomMeme({ randomNumber, currentImageUrl });
    console.log(props.getRandomMeme({ randomNumber, currentImageUrl }));
  };

  // useEffect(() => changeImage(), [currentImageIndex]);

  return (
    <section>
      <div className={style.mem}>
        {isClickButton ? (
          <MemeItem imageUrl={currentImageUrl} />
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
