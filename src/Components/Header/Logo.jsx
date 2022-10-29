import React from "react";
import logo from "./../../assets/images/Logo.png";
import style from "./Header.module.css";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt={"Logo"} className={style.logo} />
    </div>
  );
};

export default Logo;
