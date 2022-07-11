import React from "react";
import classes from "./SectionThree.module.css";
import Point from "../../subComponents/Point/Point";
import PropTypes from "prop-types";

const SectionThree = ({ data }) => {
  return (
    <div className={classes.SectionThree}>
      <p className={classes.SectionThree__pOne}>
        Our happy clients
        <Point />
      </p>
      <div className={classes.SectionThree__logos}>
        {data[0]?.clientsmedia.map((logo) => (
          <img
            key={logo.fields.title}
            src={logo.fields.file.url}
            className={classes.logo__image}
            alt="clientLogo"
          />
        ))}
      </div>
    </div>
  );
};

SectionThree.propTypes = {
  data: PropTypes.array,
};

export default SectionThree;
