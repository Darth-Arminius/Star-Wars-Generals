import * as React from 'react';
import Battlefield from './battlefield';
import OpponentBattlefield from './opponent-battlefield';
import Deck from './deck';
import Grave from './grave';
import Health from './health';
import Resource from './resource';
import OpponentResource from './opponent-resource';
import './index.css';

export default class BattleView extends React.PureComponent {
  render() {
    return (
      <div className='border'>
        <Health/>
        <div className='board-opponent-side'>
          <div className='battle-view-flex-row'>
            <Grave/>
            <OpponentResource/>
          </div>
          <div className='battle-view-flex-row'>
            <Deck/>
            <OpponentBattlefield/>
          </div>
        </div>
        <div className='board-player-side'>
          <div className='battle-view-flex-row'>
            <Battlefield/>
            <Deck/>
          </div>
          <div className='battle-view-flex-row'>
            <Resource/>
            <Grave/>
          </div>
        </div>
      </div>
    )
  }
}