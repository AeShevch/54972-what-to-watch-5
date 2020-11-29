import React, {Fragment} from "react";
import PropTypes from "prop-types";

const Star = ({index, isActive, handleChange}) => {
  const value = ++index;
  return (
    <Fragment>
      <input
        className="rating__input"
        onChange={handleChange}
        id={`star-${value}`}
        type="radio"
        name="rating"
        value={value}
        checked={isActive}
      />
      <label
        className="rating__label"
        htmlFor={`star-${value}`}>
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
