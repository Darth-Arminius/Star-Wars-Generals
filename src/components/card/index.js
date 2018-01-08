import * as React from 'react';
import AbilityBox from './ability-box';
import Cost from './cost';
import Defense from './defense';
import Image from './image';
import Name from './name';
import Offense from './offense';
import './index.css';

export default class Card extends React.PureComponent {
  render() {
    return (
      <div className='card col'>
        <div className='card-flex-row'>
          <Name/>
          <Cost/>
        </div>
        <div className='card-flex-row'>
          <Image/>
        </div>
        <div className='card-flex-row'>
          <AbilityBox/>
        </div>
        <div className='card-flex-row'>
          <Offense/>
          <Defense/>
        </div>
      </div>
    )
  }
}