import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import BattleView from '../battle-view';
import DeckEditor from '../deck-editor';
import CreateDeck from '../deck-editor/create-deck';
import EditDeck from '../deck-editor/edit-deck';
import MainMenu from '../main-menu';
import TrainingView from '../training-view';
import Settings from '../settings';

const Router = () => (
  <Switch>
    <Route exact path='/' component={MainMenu}/>
    <Route path='/battle' component={BattleView}/>
    <Route exact path='/editor' component={DeckEditor}/>
    <Route path='/editor/create' component={CreateDeck}/>
    <Route path='/editor/edit' component={EditDeck}/>
    <Route path='/training' component={TrainingView}/>
    <Route path='/settings' component={Settings}/>
  </Switch>
);

export default Router;