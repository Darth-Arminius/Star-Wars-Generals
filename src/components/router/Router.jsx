import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BattleView from "Components/BattleView";
import DeckEditor from "Components/DeckEditor";
import CreateDeck from "Components/DeckEditor/CreateDeck";
import EditDeck from "Components/DeckEditor/EditDeck";
import MainMenu from "Components/MainMenu";
import TrainingView from "Components/TrainingView";
import ProfileView from "Components/ProfileView";

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
