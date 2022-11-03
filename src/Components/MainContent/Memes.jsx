import React, { useEffect, useState } from "react";
import startImage from "./../../assets/images/start.png";
import style from "./MainContent.module.css";
import { useDispatch } from "react-redux";
import { getMemeActionCreator } from "../../reducers/memeReducer";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  console.log(currentImageIndex);
  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * memes.length);
    setCurrentImageIndex(randomNumber);
  };
  useEffect(() => changeImage(), []);

  // const addMeme = () => {
  //   changeImage(
  //     "https://i.pinimg.com/originals/12/ac/a3/12aca3c4e28a267919555df9212f4e32.jpg"
  //   );
  // };

  return (
    <section>
      <div className={style.mem}>
        <img src={memes[currentImageIndex].imageUrl} width={"300px"} />
        {/* <MemeItem image={image} /> */}
        {/* <img src={startImg} width={"250px"} /> */}
      </div>
      <button onClick={changeImage}>Magic</button>
    </section>
  );
};

export default Memes;

// function getRandomMeme() {
//   // let idNumber = Math.floor(Math.random() * memes.length);

//   let idNumber = (memes) => {
//     return memes.sort(() => Math.round(Math.random() * 100) - 50);
//   };
//   console.log(idNumber);
//   dispatch(getMemeActionCreator(1));
// }
