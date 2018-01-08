import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import BattleView from '../battle-view';
import DeckEditor from '../deck-editor';
import MainMenu from '../main-menu';

const Router = () => (
  <Switch>
    <Route exact path='/' component={MainMenu}/>
    <Route path='/battle' component={BattleView}/>
    <Route path='/editor' component={DeckEditor}/>
  </Switch>
);

export default Router;