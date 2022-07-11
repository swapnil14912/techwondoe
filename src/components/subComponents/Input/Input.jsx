import React from "react";
import classes from "./Input.module.css";
import PropTypes from "prop-types";

export const Input = ({ label, type, placeholder }) => {
  return (
    <div className={classes.Form__input}>
      {type === "checkbox" ? (
        <div className={classes.input__check}>
          <input
            type={type}
            placeholder={placeholder}
            className={classes.input}
          />
          <span className={classes.Input__label}>{label}</span>
        </div>
      ) : (
        <>
          <label className={classes.Input__label}>{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            className={classes.input}
          />
        </>
      )}
    </div>
  );
};

export const TextArea = ({ label, rows, cols, placeholder }) => {
  return (
    <div className={classes.Form__input}>
      <label className={classes.Input__label}>{label}</label>
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        className={classes.input}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

TextArea.propTypes = {
  label: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  placeholder: PropTypes.string,
};
