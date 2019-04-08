import * as React from "react";
import PropTypes from "prop-types";

import "./Cost.css";

const Cost = ({ cost: { type, amount } }) => (
  <div className="card-cost">{`${type} ${amount}`}</div>
);

Cost.propTypes = {
  cost: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired
  }).isRequired
};

export default Cost;
