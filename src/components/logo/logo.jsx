import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Logo = (props) => (
  <div className={`logo ${props.lightScheme ? `logo__link--light` : ``}`}>
    <Link to={`/`} className="logo__link">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

Logo.propTypes = {
  lightScheme: PropTypes.bool,
};

export default Logo;
