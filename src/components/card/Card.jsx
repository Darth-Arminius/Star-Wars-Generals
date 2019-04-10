import * as React from "react";
import PropTypes from "prop-types";

import CardBackgroundTexture from "Assets/images/card.png";

import AbilityBox from "./AbilityBox";
import CardType from "./CardType";
import Cost from "./Cost";
import Defence from "./Defence";
import Image from "./Image";
import Name from "./Name";
import Offence from "./Offence";

import "./Card.css";

export default class Card extends React.PureComponent {
  static propTypes = {
    card: PropTypes.shape({
      ability: PropTypes.string.isRequired,
      cardType: CardType.propTypes.isRequired,
      cost: Cost.propTypes.isRequired,
      defence: Defence.propTypes.isRequired,
      imagePath: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      offence: Offence.propTypes.isRequired
    }).isRequired
  };

  render() {
    const {
      card: { ability, cardType, cost, defence, imagePath, name, offence }
    } = this.props;
    return (
      <div
        className="card"
        style={{ backgroundImage: `url(${CardBackgroundTexture})` }}
      >
        <div className="card-header">
          <Name name={name} />
          <Cost cost={cost} />
        </div>
        <Image path={imagePath} />
        <CardType cardType={cardType} />
        <AbilityBox ability={ability} />
        <div className="card-footer">
          <Defence defence={defence} />
          <Offence offence={offence} />
        </div>
      </div>
    );
  }
}
