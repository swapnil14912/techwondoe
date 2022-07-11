import React from "react";
import classes from "./Header.module.css";
import Point from "../subComponents/Point/Point";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Header__menu}>
        <HiMenuAlt4 color="rgba(256,256,256,0.4)" size="3rem" />
        <p className={classes.menu__p}>MENU</p>
      </div>
      <div>
        <p className={classes.Header__brand}>
          techwondoe
          <Point />
        </p>
      </div>
    </header>
  );
};

export default Header;
