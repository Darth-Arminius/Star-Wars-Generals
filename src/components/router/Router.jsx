import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BattleView from "../BattleView";
import DeckEditor from "../DeckEditor";
import CreateDeck from "../DeckEditor/CreateDeck";
import EditDeck from "../DeckEditor/EditDeck";
import MainMenu from "../MainMenu";
import TrainingView from "../TrainingView";
import ProfileView from "../ProfileView";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainMenu} />
      <Route path="/battle" component={BattleView} />
      <Route exact path="/editor" component={DeckEditor} />
      <Route path="/editor/create" component={CreateDeck} />
      <Route path="/editor/edit" component={EditDeck} />
      <Route path="/training" component={TrainingView} />
      <Route path="/profile" component={ProfileView} />
    </Switch>
  </BrowserRouter>
);

export default Router;
