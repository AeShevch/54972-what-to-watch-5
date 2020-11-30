import React, {Fragment} from "react";
import PropTypes from "prop-types";

const Star = ({index, isActive, handleChange}) => {
  const value = index + 1;
  const inputId = `star-${value}`;

  return (
    <Fragment>
      <input
        className="rating__input"
        onChange={handleChange}
        id={inputId}
        type="radio"
        name="rating"
        value={value}
        checked={isActive}
      />
      <label
        className="rating__label"
        htmlFor={inputId}>
        Rating ${value}
      </label>
    </Fragment>
  );
};

Star.propTypes = {
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Star;
