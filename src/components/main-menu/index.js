import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './index.css';

const MainMenu = () => (
  <div>
    <img src={logo} className='logo' alt='logo'/>
    <h1>STAR WARS: Generals</h1>
    <h3>A Star Wars card game</h3>
    <div className='links'>
      <Link to='/battle' className='link'><div className='link-container'>Play</div></Link>
      <Link to='/training' className='link'><div className='link-container'>Training</div></Link>
      <Link to='/editor' className='link'><div className='link-container'>Deck Editor</div></Link>
      <Link to='/settings' className='link'><div className='link-container'>Settings</div></Link>
    </div>
  </div>
);

export default MainMenu;