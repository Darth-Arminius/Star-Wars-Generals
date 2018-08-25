import * as React from "react";

import Battlefield from "./Battlefield";
import OpponentBattlefield from "./OpponentBattlefield";
import Deck from "./Deck";
import Grave from "./Grave";
import Health from "./Health";
import Resource from "./Resource";
import OpponentResource from "./OpponentResource";

import "./BattleView.css";

export default class BattleView extends React.PureComponent {
  render() {
    return (
      <div className="border">
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
      </div>
    );
  }
}
