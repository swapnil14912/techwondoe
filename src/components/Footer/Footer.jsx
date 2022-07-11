import React from "react";
import Point from "../subComponents/Point/Point";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.Footer__brand}>
        techwondoe
        <Point />
      </p>
      <div className={classes.Footer__info}>
        <div className={classes.Info__One}>
          <p>ABOUT US</p>
          <p>CASE STUDIES</p>
          <p>BLOG</p>
          <p>CONTACT US</p>
        </div>
        <div className={classes.Info__Two}>
          <p>LINKEDIN</p>
          <p>HELLO@TECHWONDOE.COM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
