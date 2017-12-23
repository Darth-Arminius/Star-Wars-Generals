import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MainMenu = () => (
  <div>
    <div><Link to='/battle'>Play</Link></div>
    <div><Link to='/editor'>Deck Editor</Link></div>
  </div>
);

export default MainMenu;