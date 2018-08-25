import * as React from "react";

import AbilityBox from "./AbilityBox";
import Cost from "./Cost";
import Defense from "./Defence";
import Image from "./Image";
import Name from "./Name";
import Offense from "./Offence";

import "./Card.css";

export default class Card extends React.PureComponent {
  render() {
    return (
      <div className="card col">
        <div className="card-flex-row">
          <Name />
          <Cost />
        </div>
        <div className="card-flex-row">
          <Image />
        </div>
        <div className="card-flex-row">
          <AbilityBox />
        </div>
        <div className="card-flex-row">
          <Offense />
          <Defense />
        </div>
      </div>
    );
  }
}
