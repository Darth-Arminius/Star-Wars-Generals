import * as React from "react";
import PropTypes from "prop-types";

import "./Image.css";

const Image = ({ path }) => (
  <img src={path} alt="card" className="card-image" />
);

Image.propTypes = {
  path: PropTypes.string.isRequired
};

export default Image;
