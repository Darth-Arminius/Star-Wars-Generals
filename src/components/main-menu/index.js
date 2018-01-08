import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MainMenu = () => (
  <div>
    <h1>STAR WARS: Generals</h1>
    <h3>A Star Wars card game</h3>
    <div className='links'>
      <div className='link-container'><Link to='/battle' className='link'>Play</Link></div>
      <div className='link-container'><Link to='/editor' className='link'>Deck Editor</Link></div>
    </div>
  </div>
);

export default MainMenu;