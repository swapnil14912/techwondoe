import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import classes from "./TestimonialSwiper.module.css";
import { OrangeButton } from "../../../subComponents/Button/Button";
import { FaUserTie } from "react-icons/fa";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const TestimonialSwiper = ({ data }) => {
  return (
    <Swiper pagination={{ clickable: true }} spaceBetween={20}>
      {data?.map((item) => (
        <SwiperSlide key={item.id} className={classes.testimonials}>
          <div>
            <FaUserTie size="4rem" />
          </div>
          <div className={classes.testimonialSection}>
            <div>
              <p className={classes.nameJob}>
                {item.name}, {item.job}
              </p>
              <p className={classes.company}>{item.company}</p>
            </div>
            <div>
              <p className={classes.message}>{item.message}</p>
            </div>
            <div>
              <OrangeButton>VIEW CASE STUDY</OrangeButton>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

TestimonialSwiper.propTypes = {
  data: PropTypes.array,
};

export default TestimonialSwiper;
