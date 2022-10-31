import React from "react";
import startImg from "./../../assets/images/start.png";
import style from "./MainContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getMemeActionCreator } from "../../reducers/memeReducer";
import MemeItem from "./MemeItem";

const Memes = () => {
  const dispatch = useDispatch();
  const memes = useSelector((state) => state.memesSection.memes);

  function getRandomMeme() {
    // let idNumber = Math.floor(Math.random() * memes.length);
    let idNumber = (memes) => {
      return memes.sort(() => Math.round(Math.random() * 100) - 50);
    };
    console.log(idNumber);
    dispatch(getMemeActionCreator(memes[idNumber]));
  }
  debugger;

  // let memeElement = memes.map((image) => (
  //   <MemeItem id={image.id} imageUrl={image.imageUrl} />
  // ));

  return (
    <section>
      <div className={style.mem}>
        <MemeItem meme={memes} />
        {/* <img src={startImg} width={"250px"} /> */}
      </div>
      <button onClick={() => getRandomMeme()}>Magic</button>
    </section>
  );
};

export default Memes;
