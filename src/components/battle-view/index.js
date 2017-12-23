import * as React from 'react';
import Battlefield from './battlefield';
import Deck from './deck';
import Grave from './grave';
import Health from './health';
import Resource from './resource';
import './index.css';

export default class BattleView extends React.PureComponent {
  render() {
    return (
      <div>
        <Battlefield/>
        <Deck/>
        <Grave/>
        <Health/>
        <Resource/>
      </div>
    )
  }
}