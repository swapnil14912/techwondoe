import React from "react";
import { BlackButton } from "../../subComponents/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import classes from "./SectionTwo.module.css";
import Point from "../../subComponents/Point/Point";
import PropTypes from "prop-types";

const SectionTwo = ({ data }) => {
  return (
    <div className={classes.SectionTwo}>
      <div className={classes.SectionTwo__partOne}>
        <p className={classes.partOne__pOne}>OUR SERVICES</p>
        <p className={classes.partOne__pTwo}>
          High quality software
          <Point />
        </p>
        <ul className={classes.partOne__ul}>
          {data[0]?.services.map((service) => (
            <li key={service?.id} className={classes.partOne__li}>
              <FiArrowUpRight color="#f9d423" />
              &nbsp;{service?.service}
            </li>
          ))}
        </ul>
        <BlackButton>LEARN MORE</BlackButton>
      </div>
      <div>
        <img
          src={data[0]?.servicemedia?.file?.url}
          alt="gifs"
          className={classes.service__media}
        />
      </div>
    </div>
  );
};

SectionTwo.propTypes = {
  data: PropTypes.array,
};

export default SectionTwo;
