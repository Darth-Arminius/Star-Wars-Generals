import * as React from "react";
import PropTypes from "prop-types";

import "./Defence.css";

const Defence = ({ defence: { light, heavy } }) => (
  <div className="defence">
    <div className="defence-light">{`L ${light}`}</div>
    <div className="defence-heavy">{`H ${heavy}`}</div>
  </div>
);

Defence.propTypes = {
  defence: PropTypes.shape({
    light: PropTypes.string.isRequired,
    heavy: PropTypes.string.isRequired
  }).isRequired
};

export default Defence;
