import * as React from "react";
import PropTypes from "prop-types";

import "./Offence.css";

const Offence = ({ offence: { light, heavy } }) => (
  <div className="offence">
    <div className="offence-light">{`L: ${light}`}</div>
    <div className="offence-heavy">{`H: ${heavy}`}</div>
  </div>
);

Offence.propTypes = {
  offence: PropTypes.shape({
    light: PropTypes.string.isRequired,
    heavy: PropTypes.string.isRequired
  }).isRequired
};

export default Offence;
