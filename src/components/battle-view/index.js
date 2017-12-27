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
      <div className='border'>
        <Health/>
        <div className='battle-view-flex-row'>
          <Battlefield/>
          <Deck/>
        </div>
        <div className='battle-view-flex-row'>
          <Resource/>
          <Grave/>
        </div>
      </div>
    )
  }
}