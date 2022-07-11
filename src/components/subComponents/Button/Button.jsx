import React from "react";
import classes from "./Button.module.css";
import PropTypes from "prop-types";

export const OrangeButton = ({ children, customStyles }) => {
  return (
    <button className={`${classes.orangeButton} ${customStyles}`}>
      {children}
    </button>
  );
};

export const BlackButton = ({ children, customStyles }) => {
  return (
    <button className={`${classes.blackButton} ${customStyles}`}>
      {children}
    </button>
  );
};

OrangeButton.propTypes = {
  children: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
};

BlackButton.propTypes = {
  children: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
};
