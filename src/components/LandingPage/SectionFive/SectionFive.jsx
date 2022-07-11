import React from "react";
import Point from "../../subComponents/Point/Point";
import PropTypes from "prop-types";
import classes from "./SectionFive.module.css";
import TestimonialSwiper from "./TestimonialSwiper/TestimonialSwiper";

const SectionFive = ({ data }) => {
  return (
    <div className={classes.SectionFive}>
      <p className={classes.SectionFive__pOne}>TESTIMONIALS</p>
      <p className={classes.SectionFive__pTwo}>
        What they{`'`}re saying about us
        <Point />
      </p>
      <div className={classes.SectionFive__testimonial}>
        <TestimonialSwiper data={data[0]?.testimonials} />
      </div>
    </div>
  );
};

SectionFive.propTypes = {
  data: PropTypes.array,
};

export default SectionFive;
