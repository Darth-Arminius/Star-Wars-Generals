import * as React from "react";

import TableTexture from "Assets/images/texture.jpg";

import Battlefield from "./Battlefield";
import OpponentBattlefield from "./OpponentBattlefield";
import Deck from "./Deck";
import Grave from "./Grave";
import Health from "./Health";
import Resource from "./Resource";
import OpponentResource from "./OpponentResource";

import "./BattleView.css";

const sectionStyle = {
  backgroundImage: `url(${TableTexture})`
};

export default class BattleView extends React.PureComponent {
  render() {
    return (
      <div className="border">
        <section style={sectionStyle}>
          <Health />
          <div className="board-opponent-side">
            <div className="battle-view-flex-row">
              <Grave />
              <OpponentResource />
            </div>
            <div className="battle-view-flex-row">
              <Deck />
              <OpponentBattlefield />
            </div>
          </div>
          <div className="board-player-side">
            <div className="battle-view-flex-row">
              <Battlefield />
              <Deck />
            </div>
            <div className="battle-view-flex-row">
              <Resource />
              <Grave />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
