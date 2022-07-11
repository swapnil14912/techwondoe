import React from "react";
import { OrangeButton } from "../../subComponents/Button/Button";
import { Input, TextArea } from "../../subComponents/Input/Input";
import Point from "../../subComponents/Point/Point";
import classes from "./SectionSix.module.css";
import PropTypes from "prop-types";

const SectionSix = ({ data }) => {
  return (
    <div className={classes.SecSix}>
      <div className={classes.SectionSix}>
        <p className={classes.SectionSix__pOne}>contact</p>
        <p className={classes.SectionSix__pTwo}>
          Let{`'`}s start
          <br />
          your project
          <Point />
        </p>
      </div>
      <div className={classes.form}>
        <form className={classes.form__section}>
          <div className={classes.form__input}>
            <Input label="NAME" type="text" />
            <Input label="EMAIL ADDRESS" type="email" />
            <TextArea label="MESSAGE" rows="3" cols="32" />
          </div>
          <div>
            <p className={classes.form__check}>WHAT ARE YOU LOOKING FOR</p>
            {data[0]?.checkboxes.map((item) => (
              <Input key={item.id} label={item.service} type="checkbox" />
            ))}
            <OrangeButton>SEND REQUEST</OrangeButton>
          </div>
        </form>
      </div>
    </div>
  );
};

SectionSix.propTypes = {
  data: PropTypes.array,
};

export default SectionSix;
