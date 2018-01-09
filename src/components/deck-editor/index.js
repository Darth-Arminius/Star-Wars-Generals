import * as React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../images/placeholder.png';
import './index.css';

export default class DeckEditor extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Deck Editor</h1>
        <div>
          <Link to='/editor/create' className='link'><div className='link-container'>Create New Deck</div></Link>
        </div>
        <div className='deck-editor-flex-row'>
          <Link to='/editor/edit' className='link'>
            <div className='deck'>
              <img src={Placeholder} className='deck-thumbnail' alt='deck-thumbnail'/>
            </div>
          </Link>
          <Link to='/editor/edit' className='link'>
            <div className='deck'>
              <img src={Placeholder} className='deck-thumbnail' alt='deck-thumbnail'/>
            </div>
          </Link>
          <Link to='/editor/edit' className='link'>
            <div className='deck'>
              <img src={Placeholder} className='deck-thumbnail' alt='deck-thumbnail'/>
            </div>
          </Link>
          <Link to='/editor/edit' className='link'>
            <div className='deck'>
              <img src={Placeholder} className='deck-thumbnail' alt='deck-thumbnail'/>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}