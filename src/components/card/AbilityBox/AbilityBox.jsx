import * as React from "react";
import PropTypes from "prop-types";

import "./AbilityBox.css";

const AbilityBox = ({ ability }) => (
  <div className="ability-box">{ability}</div>
);

AbilityBox.propTypes = {
  ability: PropTypes.string.isRequired
};

export default AbilityBox;
