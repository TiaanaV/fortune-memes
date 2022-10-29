import React from "react";
import preloader from "./../../assets/images/Preloader.gif";

let Preloader = (props) => {
  return (
    <div>
      <img role={'main'} src={preloader} width={"300px"} />
    </div>
  );
};

export default Preloader;
