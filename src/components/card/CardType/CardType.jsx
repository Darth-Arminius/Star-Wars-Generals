import * as React from "react";
import PropTypes from "prop-types";

import "./CardType.css";

const CardType = ({ cardType: { designation, species } }) => (
  <div className="card-type">{`${designation} - ${species}`}</div>
);

CardType.propTypes = {
  cardType: PropTypes.shape({
    designation: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  }).isRequired
};

export default CardType;
