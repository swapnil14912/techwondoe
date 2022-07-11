import React from "react";
import { OrangeButton, BlackButton } from "../../subComponents/Button/Button";
import Point from "../../subComponents/Point/Point";
import classes from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <div className={classes.SectionOne}>
      <div>
        <p className={classes.SectionOne__pOne}>
          WE{`'`}RE EXPERIENCED SOFTWARE PRODUCT BUILDERS
        </p>
        <p className={classes.SectionOne__pTwo}>
          Kickass software
          <br />
          development
          <Point />
        </p>
        <div className={classes.SectionOne__button}>
          <OrangeButton>ENQUIRE NOW</OrangeButton>
          <BlackButton>VIEW CASE STUDIES</BlackButton>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
