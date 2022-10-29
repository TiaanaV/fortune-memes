import React from "react";
import Logo from "./Logo";
import Tagline from "./Tagline";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Tagline />
    </header>
  );
};

export default Header;
