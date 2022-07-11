import React from "react";
import classes from "./SectionFour.module.css";
import PropTypes from "prop-types";
import { FiArrowUpRight } from "react-icons/fi";
import Point from "../../subComponents/Point/Point";

const SectionFour = ({ data }) => {
  return (
    <div className={classes.SectionFour}>
      <p className={classes.SectionFour__pOne}>WHY US?</p>
      <div className={classes.whyus}>
        {data[0]?.whyus.map((item) => (
          <div key={item.id} className={classes.SectionFour__whyus}>
            <div>
              <p className={classes.whyus__title}>
                {item?.title}
                <Point />
              </p>
            </div>
            <div>
              {item?.description.map((desc) => (
                <p className={classes.whyus__desc} key={desc.id}>
                  <FiArrowUpRight color="#f9d423" />
                  &nbsp;{desc.message}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SectionFour.propTypes = {
  data: PropTypes.array,
};

export default SectionFour;
