import * as React from "react";

import CardBackgroundTexture from "Assets/images/card.png";

import AbilityBox from "./AbilityBox";
import Cost from "./Cost";
import Defense from "./Defence";
import Image from "./Image";
import Name from "./Name";
import Offense from "./Offence";
import CardType from "./CardType";

import "./Card.css";

export default class Card extends React.PureComponent {
  render() {
    return (
      <div
        className="card"
        style={{ backgroundImage: `url(${CardBackgroundTexture})` }}
      >
        <div className="card-header">
          <Name />
          <Cost />
        </div>
        <Image />
        <CardType />
        <AbilityBox />
        <div className="card-footer">
          <Offense />
          <Defense />
        </div>
      </div>
    );
  }
}
